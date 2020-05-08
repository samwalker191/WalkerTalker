class RoomsChannel < ApplicationCable::Channel
  def subscribed
    @room = Room.find_by(id: params[:id])
    stream_for @room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    @room = Room.find_by(id: data['room_id'])
    RoomsChannel.broadcast_to(@room, 'hello')
  end
end
