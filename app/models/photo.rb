class Photo < ActiveRecord::Base
  validates :user_id, :image, presence: true


  belongs_to :user, counter_cache: true
  validates :user, presence: true

  has_many :likes

  has_many :user_likes,
    through: :likes,
    source: :user

  has_many :comments

  has_many :commenters,
    through: :comments,
    source: :user


end
