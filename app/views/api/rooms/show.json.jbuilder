json.room do
    json.extract! @room, :id, :name, :owner_id
end

json.user do
    json.partial! 'api/users/user', user: @room.owner
end