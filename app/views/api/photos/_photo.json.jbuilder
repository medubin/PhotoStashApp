json.extract!(photo, :user_id, :image, :caption, :id, :time)

json.user do
  json.username photo.user.username
  json.profile_picture photo.user.picture
end


json.likes(photo.user_likes) do |like|
  json.username like.username
end

json.comments(photo.comments) do |comment|
  json.username comment.user.username
  json.body comment.body
  json.id comment.id
end
