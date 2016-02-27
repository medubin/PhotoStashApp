class ChangeFollows < ActiveRecord::Migration
  def change
    remove_index :follows, :follower_id
    remove_index :follows, :followed_id

    add_index :follows, :follower_id
    add_index :follows, :followed_id

    add_index :follows, [:follower_id, :followed_id], unique: true

  end
end
