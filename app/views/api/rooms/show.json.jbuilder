json.room do
    json.extract! @room, :id, :name, :owner_id, :message_ids
    json.new_message false
end

json.user do
    json.partial! 'api/users/user', user: @room.owner
end

json.messages do
    @room.messages.includes(:author).each do |message|
        json.set! message.id do
            json.extract! message, :id, :content, :author_id, :room_id, :created_at
            json.author_name message.author.username
        end
    end
end
