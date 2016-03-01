json.extract!(photo, :user_id, :image, :caption, :id)

user = photo.user
json.user do
  json.extract!(user, :username)
end


json.likes(photo.user_likes) do |like|

  json.extract!(like, :username)
end
