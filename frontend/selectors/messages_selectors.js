export const messagesByRoom = (state, room) => {
    if (!room) return [];
    if (!room.messageIds) return [];
    return room.messageIds.map(messageId => state[messageId]);
};
