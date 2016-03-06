# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

usernames = %w(demo-account matt steven bob georgina tyrion doglover86 catscatscats cool-guy38 joe samantha sarah chuck brian nature ziggy-stardust ethel victor elise ibrahim toy dion rick kamryn dustin darren dejon kole robbie dennis lawrence_ko aleia arden kylie maria pinkie waino_rohan rosanna foster.fritsch amely joanne mertie chris_towne alene velva lloyd mitchel america lucile efren bobbie shaun geo_west adah alanis rylan emerald enoch jovan geo )
password = '123456'

usernames.each_with_index do |username, idx|
  User.create(username: username, password: password, picture: 'https://unsplash.it/1080/1080?image=' + (500 + idx).to_s)
end

User.all.each_with_index do |user, idx|
  15.times do |i|
    photo = Photo.new(user_id: user.id, image: 'https://unsplash.it/1080/1080?image=' + (499 + idx + i).to_s, caption: Faker::Hipster.sentence)
    photo.created_at = (rand*10000).minutes.ago
    photo.save

  end
  5.times do |i|
    Follow.create(follower_id: user.id, followed_id: (user.id + i) % User.all.length )
  end
end



Photo.all.each do |photo|
  rand(0..4).times do |i|
    Comment.create(user_id: User.all.sample.id, photo_id: photo.id, body: Faker::Hipster.sentence)
  end
  rand(0..20).times do |i|
    Like.create(user_id: User.all.sample.id, photo_id: photo.id)
  end
end
