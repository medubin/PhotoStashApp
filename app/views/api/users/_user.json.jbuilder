json.extract!(user, :username, :id, :picture)

json.photos(photos) do |photo|
  json.extract!(photo, :image, :likes_count, :comments_count, :id)
end

json.followed(user.followed.count)
json.followers(user.followers.count)
json.photos_count(user.photos_count)
