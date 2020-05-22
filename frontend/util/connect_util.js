
const connect = (roomId, action) => {
    App.cable.subscriptions.create(
        { channel: 'RoomsChannel', id: roomId },
        {
            speak: function (data) { return this.perform("speak", data); },
            received: function (message) { action(message); }
        }
    );
};

export default connect;