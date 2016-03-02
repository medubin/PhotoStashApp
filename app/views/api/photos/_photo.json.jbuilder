json.extract!(photo, :user_id, :image, :caption, :id)

json.user do
  json.username photo.user.username
end


json.likes(photo.user_likes) do |like|
  json.username like.username
end
