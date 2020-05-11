json.room do
    json.extract! @room, :id, :name, :owner_id
end

json.user do
    json.partial! 'api/users/user', user: @room.owner
end

json.messages do
    @room.messages.each do |message|
        json.set! message.id do
            json.extract! message, :id, :content, :author_id, :room_id
        end
    end
end
