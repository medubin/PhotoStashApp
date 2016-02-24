json.extract!(photo, :user_id, :image, :caption)

user = photo.user
json.user do
  json.extract!(user, :username)
end
