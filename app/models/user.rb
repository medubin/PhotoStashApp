class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  validates :username, length: {maximum: 15}
  attr_reader :password

  has_many :photos, -> { order(:created_at => :desc) }

  has_many :follower_connections,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :followed_connections,
    foreign_key: :followed_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :followed,
    through: :follower_connections,
    source: :followed

  has_many :followers,
    through: :followed_connections,
    source: :follower

  has_many :likes

  has_many :liked_photos,
    through: :likes,
    source: :photo

  has_many :comments


  def self.search(query)
    where("username like ?", "%#{query}%").limit(10)
  end

  def self.find_by_credentials(username, password)
    user = find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
