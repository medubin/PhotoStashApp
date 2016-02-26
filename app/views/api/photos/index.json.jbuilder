# json.partial! 'photo', collection: @photos, as: :photo
all_photos = []
@user.followed.each do |followed|
  all_photos += followed.photos
end
all_photos += @user.photos

json.partial! 'photo', collection: all_photos, as: :photo
