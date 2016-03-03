class Comment < ActiveRecord::Base
  validates :user_id, :photo, presence: true

  belongs_to :user
  belongs_to :photo, counter_cache: true

  validates :user, presence: true
  validates :photo, presence: true



end
