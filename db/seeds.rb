# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Room.destroy_all
Message.destroy_all
RoomMembership.destroy_all

walker = User.create!(username: 'walker', password: '123456')
Room.create!(name: 'general', owner_id: walker.id)