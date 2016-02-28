class Photo < ActiveRecord::Base
  validates :user_id, :image, presence: true


  belongs_to :user
  validates :user, presence: true


end
