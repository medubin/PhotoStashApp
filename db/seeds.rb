# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

usernames = %w(demo-account matt steven bob georgina tyrion doglover86 catscatscats cool-guy38 joe samantha sarah chuck brian nature ziggy-stardust ethel victor elise ibrahim toy dion rick kamryn dustin darren dejon kole robbie dennis lawrence_ko aleia arden kylie maria pinkie waino_rohan rosanna foster.fritsch amely joanne mertie chris_towne alene velva lloyd mitchel america lucile efren bobbie shaun geo_west adah alanis )
password = '123456'

comments = [
  "Oh man I miss that place!",
  "Beautiful.",
  "I know you will be missed so much!! It was always so great to work with you and to also call you my friend! Good luck on your first day!! Can't wait to hear about it!",
  "Oh my! Gorgeous view!",
  "I MISS YOU ALL SO MUCH IT HURTS.",
  "this is a dope photo.",
  "did you get to do any fishing?",
  "Well I'm glad SOMEONE out there is paying attention to the world's needs.",
  "Can't wait for summer time",
  "Love is key",
  "Nice picture.",
  "Great memories!",
  "Jealous?",
  "You deserve happiness always",
  "inspired by you!!!!!",
  "Favorite person",
  "Wow wow wow beauties",
  "Enjoy!",
  "No way. Too perfect!",
  "Wow! Truly exceptional!",
  "This is actually quite fantastic.",
  "That's dope lol",
  "I love this! (And you)",
  "Stunning",
  "go to the goodearth...only place id trust to know the truth",
  "Home...",
  "What a little sweetie!!",
  "Who's that cute guy",
  "Growing up sooo fast!!!",
  "Yippee! Can't wait!",
  "Yes!",
  "Woot woot!",
  "Wishing I could be there!!",
  "great picture",
  "Hahah whatevs ",
  "Awe...",
  "Bonita",
  "Awesome pic!",
  "Happy bday old friend!!;)",
  "Looks awesome!!!",
  "Need this framed",
  "Too funny!!!",
  "But will I get spooked!?",
  "Sounds soooooo fun",
  "albin! looks great.",
  "Love the noodle action!",
  "Well I hope you bring him flowers for your second date at least.",
  "Gorgeous",
  "Great picture!",
  "Yes!!!!",
  "congrats",
  "Tell me when I've gone overboard...",
  "Awe, thank you for sharing, lady! That made me smile ear-to-ear",
  "That looks divine",
  "We will be over soon",
  "So jealous of the simplicity in this photo!",
  "One winery we haven't been to, I'll have to check it out tomorrow. enjoy!",
  "Enjoy!",
  "You're stunning. Peaceful and fierce all in one!",
  "cutie patutie!",
  "Home...",
  "I wanna see!",
  "This was a pretty good dive trip, only dove two days, but was really good at least and got my fill of cabo san lucas tacos. This time at least my head was not all messed up like last time I went there, though it had a few issues on it.",
  "I will post a few vids when I figure out how to get a working Imovie program on my computer so I can edit and combine all the small cool vids, including the dolphins slapping their tails on the water, and the sea lions playing with me and I was able to pet them under water (was fun as the smaller ones were biting my fins, arms, and anything else, it was like playing with underwater dogs)",
  "That dive excursion was two hour ride out to le paz, then two hour boat ride out to the sealion colony. Now went from SFO airport landing around 9pm, BART over to oakland airport to wait for flight at 6am, and no bar or restaurant open",
  "Just interviewed 96-year-old musical legend Joe Masteroff, who wrote 'Cabaret.' And now I'm asking myself, in the words of Elphaba: 'Did that really just happen?'",
  "Ok internet, you win",
  "Beautiful day to play outside.",
  "Happy Birthday Dad! I love you so much",
  "Wish you were in Florida!",
  "We might work out an arrangement!",
  "Great job!!!",
  "guess we'll have to see. I was already considering Montana, Texas, and Alaska as potential options if NC continues to dry up within the next year or two.",
  "Something real nice and friendly",
  "YESSSS",
  "Row, row, row your boat. Crowd participation at its finest.",
  "Another reason not to move to Portland",
  "This one is so amazing!",
  "This is pure magic",
  "You've been hard at work lately! This is beautiful.",
  "You are simply the most wonderful talent. smile emoticon",
  "Thanks guys, you are all so kind..I've been working hard and this one just flowed out. It's nice when that happens!",
  "Where does the fern end and the Amy begin?",
  "'Sometimes I look in the mirror and I don't even know if it's-a me anymore' - Mario in therapy",
  "good content",
  "Thank you",
  "Nice to see my orangutan right at the back up in the smithsonian",
  "What an impressive blue! Wonderful capture!",
  "I'm having a blast, dreaming of playing with all my friends in the wild.",
  "So glad this was captured and shared!",
  "The reflection in the water and the mist give this photo a bit of poetry",
  "Awesome capture!",
  "I think stuff like this are great",
  "Oh lovely shot, well captured.",
  "Gorgeous!",
  "too true - ugh - lol",
  "You talking to me?",
  "Yin and Yang",
  "They look like they are old pals shaking hands. Adorable !",
  "Outstanding!",
  "LOVE this! Thanks for sharing",



]



usernames.each_with_index do |username, idx|
  User.create(username: username, password: password, picture: 'https://unsplash.it/1080/1080?image=' + (500 + idx).to_s)
end

photoblacklist = [205,224, 226, 245, 246, 262, 285, 286, 489, 561,578, 587,589, 597, 1091]


User.all.each_with_index do |user, idx|
  15.times do |i|
    unless photoblacklist.include?(200 + (idx * 15) + i)
      photo = Photo.new(user_id: user.id, image: 'https://unsplash.it/1080/1080?image=' + (200 + (idx * 15) + i).to_s, caption: comments.sample)
      photo.created_at = (rand*10000).minutes.ago
      photo.save
    end

  end
  (4 + rand(0..3)).times do |i|
    Follow.create(follower_id: user.id, followed_id: (user.id + i) % User.all.length )
  end
end




Photo.all.each do |photo|
  rand(0..4).times do |i|
    Comment.create(user_id: User.all.sample.id, photo_id: photo.id, body: comments.sample)
  end
  rand(0..20).times do |i|
    Like.create(user_id: User.all.sample.id, photo_id: photo.id)
  end
end
