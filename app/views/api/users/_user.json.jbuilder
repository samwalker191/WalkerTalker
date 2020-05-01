json.extract! user, :id, :username
json.ownedRoomIds user.room_ids
json.subbedRoomIds user.subbed_room_ids