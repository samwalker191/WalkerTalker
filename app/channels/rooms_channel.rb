class RoomsChannel < ApplicationCable::Channel
  def subscribed
    @room = Room.find_by(id: params[:id])
    stream_for @room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    new_message = { 
      content: data['content'],
      room_id: data['room_id'],
      author_id: data['current_user_id']
    }
    new_message = Message.create(new_message)
    @room = new_message.room
    # @room = Room.find_by(id: data['room_id'])
    RoomsChannel.broadcast_to(@room, new_message)
  end
end
