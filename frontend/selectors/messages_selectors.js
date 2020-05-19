export const messagesByRoom = (state, room) => {
    return room.messageIds.map(messageId => state[messageId]);
};
