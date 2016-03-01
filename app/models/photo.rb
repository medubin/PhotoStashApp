class Photo < ActiveRecord::Base
  validates :user_id, :image, presence: true


  belongs_to :user
  validates :user, presence: true

  has_many :likes

  has_many :user_likes,
    through: :likes,
    source: :user



end
