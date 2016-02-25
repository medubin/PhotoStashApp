json.extract!(user, :username)

json.photos(user.photos) do |photo|
  json.extract!(photo, :image)
end
