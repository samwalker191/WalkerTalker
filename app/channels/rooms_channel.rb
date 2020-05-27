class RoomsChannel < ApplicationCable::Channel
  def subscribed
    # just have this stream for one channel == less connections needed
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
    author_name = new_message.author.username
    new_message = new_message.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
    new_message['authorName'] = author_name

    RoomsChannel.broadcast_to(@room, new_message)
  end
end
