json.followed(@user.followed) do |follow|
  json.extract!(follow, :username)
end
