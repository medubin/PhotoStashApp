json.extract!(@comment, :photo_id, :body, :id)
json.extract!(@comment.user, :username)
