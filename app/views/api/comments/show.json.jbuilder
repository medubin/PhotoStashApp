json.extract!(@comment, :photo_id, :body)
json.extract!(@comment.user, :username)
