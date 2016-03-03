class Follow < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true
  validates :follower_id, uniqueness: { scope: :followed_id }
  validates :followed_id, uniqueness: { scope: :follower_id }

  validate :follower_and_followed_must_be_different

  def follower_and_followed_must_be_different
    if self.followed_id == self.follower_id
      errors.add(:followed_id, 'must be different from follower_id')
      errors.add(:follower_id, 'must be different from followed_id')
    end
  end



  belongs_to :follower,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "User"
    #, counter_cache: true

  belongs_to :followed,
    foreign_key: :followed_id,
    primary_key: :id,
    class_name: "User"
    #, counter_cache: true

  validates :follower, presence: true
  validates :followed, presence: true



end
