json.extract!(user, :username, :id)

json.photos(user.photos.reverse) do |photo|
  json.extract!(photo, :image, :likes_count, :comments_count)
end

json.followed(user.followed.count)
json.followers(user.followers.count)
