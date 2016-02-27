# json.partial! 'photo', collection: @photos, as: :photo
all_photos = []
@user.followed.each do |followed|
  all_photos += followed.photos
end
all_photos += @user.photos
all_photos.sort!{ |x,y| y.created_at <=> x.created_at }

json.partial! 'photo', collection: all_photos, as: :photo

# followed photos, and put in controller
