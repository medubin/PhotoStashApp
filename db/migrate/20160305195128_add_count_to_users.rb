class AddCountToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.integer :photos_count, null:false, default: 0
    end
  end
end
