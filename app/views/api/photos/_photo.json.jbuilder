json.extract!(photo, :user_id, :image, :caption, :id)

json.user do
  json.username photo.user.username
end


json.likes(photo.user_likes) do |like|
  json.username like.username
end

json.comments(photo.comments) do |comment|
  json.username comment.user.username
  json.body comment.body
  json.id comment.id
end
