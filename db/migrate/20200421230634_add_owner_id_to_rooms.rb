class AddOwnerIdToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :owner_id, :integer, null: false
    add_index :rooms, :owner_id
  end
end
