export const ownedRoomsForCurrentUser = ({ session, entities: { users, rooms } }) => {
    let ownedRoomIds = users[session.id].ownedRoomIds;
    return ownedRoomIds.map(roomId => rooms[roomId]);
};

export const subbedRoomsForCurrentUser = ({ session, entities: { users, rooms } }) => {
    let subbedRoomIds = users[session.id].subbedRoomIds;
    return subbedRoomIds.map(roomId => rooms[roomId]);
};


export const allRoomsForCurrentUser = state => {
    return ownedRoomsForCurrentUser(state).concat(subbedRoomsForCurrentUser(state));
};