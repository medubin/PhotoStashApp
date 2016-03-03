class AddCountToPhotos < ActiveRecord::Migration
  def change
    change_table :photos do |t|
      t.integer :likes_count, null:false, default: 0
      t.integer :comments_count, null:false, default: 0
    end
  end
end
