json.followed(@user.followed) do |follow|
  json.extract!(follow, :username, :id)
end
