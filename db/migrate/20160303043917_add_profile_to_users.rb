class AddProfileToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :picture
      t.string :email
      t.string :name
      t.string :sex
      t.text :bio
    end
  end
end
