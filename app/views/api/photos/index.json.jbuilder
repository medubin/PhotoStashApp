#

json.extract!(@photo_count, :count)
json.photos do
  json.partial! 'photo', collection: @all_photos, as: :photo
end
