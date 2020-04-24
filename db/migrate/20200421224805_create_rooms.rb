class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.string :password_digest, 

      t.timestamps
    end
    add_index :rooms, :name, unique: true
  end
end
