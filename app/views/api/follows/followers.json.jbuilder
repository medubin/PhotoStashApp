json.followers(@user.followers) do |follow|
  json.extract!(follow, :username, :id)
end
