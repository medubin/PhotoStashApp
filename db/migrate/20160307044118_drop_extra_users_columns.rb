class DropExtraUsersColumns < ActiveRecord::Migration
  def change
    remove_column :users, :email
    remove_column :users, :name
    remove_column :users, :sex
    remove_column :users, :bio
  end
end
