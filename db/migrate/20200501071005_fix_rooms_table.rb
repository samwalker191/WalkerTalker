class FixRoomsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :rooms

    create_table :rooms do |t|
      t.string :name, null: false
      t.string :password_digest
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :rooms, :name, unique: true
    add_index :rooms, :owner_id
  end
end
