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


    def time
      time_in_seconds = (Time.now.to_i - Time.at(created_at).to_i)
      time_in_minutes = time_in_seconds / 60
      time_in_hours = time_in_minutes / 60
      time_in_days = time_in_hours / 24
      time_in_weeks = time_in_days / 7

      time = time_in_seconds.to_s + 's' if time_in_seconds < 60
      time = time_in_minutes.to_s + "m" if time_in_seconds >= 60
      time = time_in_hours.to_s + "h" if time_in_minutes >= 60
      time = time_in_days.to_s + "d" if time_in_hours >= 24
      time = time_in_weeks.to_s + "w" if time_in_days >= 7

      time
    end


end
