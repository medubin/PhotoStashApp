json.extract!(user, :username)

json.photos(user.photos.reverse) do |photo|
  json.extract!(photo, :image)
end
