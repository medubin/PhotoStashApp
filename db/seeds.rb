# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  usernames = %w(matt steven bob georgina dario tyrion coolrider-862 potato testuserplzignore dog doglover86)
  password = '123456'

  usernames.each do |username|
    User.create(username: username, password: password)
  end


photos = [
  'http://res.cloudinary.com/photostash/image/upload/v1456648566/Ursus_americanus_PO_04-Large_e6ygjc.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648566/tumblr_o34e1uV2Vc1tlge8bo1_1280_xlwz4k.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648566/tumblr_nwp4j9O7TA1trxozuo1_1280_nhagmq.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648566/tumblr_o0tg0aNeZ01r6qjggo1_1280_bpritj.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648565/tumblr_nxxiw5CjNR1rlo1m5o1_1280_xktvfc.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648565/tumblr_o0sx5lPlEP1s6vj55o1_1280_vfrobz.jpg',

  'http://res.cloudinary.com/photostash/image/upload/v1456648565/tumblr_nzjafhYads1sdrpodo1_1280_ejrrji.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648565/tumblr_nzzd4mNj0Z1sksk4mo1_1280_mardzk.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648565/tumblr_nwml17Oi0V1uxnnwio1_1280_ptb4pb.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648565/tumblr_nvopp85fCX1uuntdfo1_1280_irm932.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648564/new-york-strip-steak-sous-vide_zmnvwu.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648563/tumblr_ntjtnzM9EM1uv4625o1_1280_lxb2bf.jpg',

  'http://res.cloudinary.com/photostash/image/upload/v1456648563/tumblr_ns8011WHHV1u2cmuko1_1280_ykombm.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648563/tumblr_nt8zrwIkUC1tj1uzko1_1280_tzncfg.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648563/odmjxnK_sdpvee.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648563/Surfer-8684-Lego-Minifigures-Series-2-2_ekeilx.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648562/IMG_3481_gzjuf6.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648562/jaime-lannister-sod_gefkck.jpg',

  'http://res.cloudinary.com/photostash/image/upload/v1456648561/11357736_1479083382385576_1572209480_n_kiijtp.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648561/actors_game_of_thrones_a_song_of_ice_and_fire_tyrion_lannister_peter_dinklage_3840x2560_wallpaper_Wallpaper_1024x1024_www.wallpaperswa_l1q8bc.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648561/11254324_1653599544907861_649284313_n_eymrbo.jpg',
  'http://res.cloudinary.com/photostash/image/upload/v1456648561/11335757_1635613216685374_995888919_n_ivnipb.jpg',
]

photos.each_with_index do |photo, idx|
  Photo.create(user_id: (idx + 2)/2, image: photo, caption: Faker::Hipster.sentence)
end

User.all.each do |user|
  Follow.create(follower_id: user.id, followed_id: (user.id + 1) % User.all.length )
  Follow.create(follower_id: user.id, followed_id: (user.id + 2) % User.all.length )
end



User.create(username: 'allphotos', password: password)

photos.each do |photo|
  Photo.create(user_id: User.find_by(username: 'allphotos').id, image: photo, caption: Faker::Hipster.sentence)
end
