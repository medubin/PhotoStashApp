photo = @like.photo
json.extract!(photo, :id)
json.extract!(@like.user, :username)
