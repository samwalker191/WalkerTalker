json.rooms do
    @rooms.each do |room|
        json.set! room.id do 
            json.extract! room, :id, :name, :owner_id
        end
    end
end

json.roomIds @rooms.map(&:id)