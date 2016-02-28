json.followed(@user.followers) do |follow|
  json.extract!(follow, :username)
end
