class Follow < ActiveRecord::Base
  belongs_to :follower,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :followed,
    foreign_key: :followed_id,
    primary_key: :id,
    class_name: "User"



end
