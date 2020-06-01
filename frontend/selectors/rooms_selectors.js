export const ownedRoomsForCurrentUser = (session, users, rooms) => {
    let ownedRoomIds = users[session.id].ownedRoomIds;
    return ownedRoomIds.map(roomId => rooms[roomId]);
};

export const subbedRoomsForCurrentUser = (session, users, rooms) => {
    let subbedRoomIds = users[session.id].subbedRoomIds;
    return subbedRoomIds.map(roomId => rooms[roomId]);
};

export const allRoomsForCurrentUser = (session, users, rooms) => {
    return ownedRoomsForCurrentUser(session, users, rooms).concat(subbedRoomsForCurrentUser(session, users, rooms));
};

export const searchedRoomsByIds = (roomIds, rooms) => {
    return roomIds.map(id => rooms[id]);
}