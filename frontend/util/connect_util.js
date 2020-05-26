
const connect = (roomId, receiveMessage, receiveMyMessage, currentUserId) => {
    App.cable.subscriptions.create(
        { channel: 'RoomsChannel', id: roomId },
        {
            speak: function (data) {
                return this.perform("speak", data); 
            },
            received: function (message) { 
                if (currentUserId === message.authorId) {
                    receiveMyMessage(message);
                } else {
                    receiveMessage(message); 
                }
            }
        }
    );
};

export default connect;