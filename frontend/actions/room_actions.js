import * as RoomAPIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_SEARCHED_ROOMS = 'RECEIVE_SEARCHED_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOM_ERRORS = 'RECEIVE_ROOM_ERRORS';
export const CLEAR_MESSAGE_NOTIFICATION = "CLEAR_MESSAGE_NOTIFICATION";
export const CLEAR_ROOM_ERRORS = 'CLEAR_ROOM_ERRORS';

const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

const receiveSearchedRooms = ({ rooms, roomIds }) => ({
    type: RECEIVE_SEARCHED_ROOMS,
    rooms,
    roomIds
});

const receiveRoom = payload => ({
    type: RECEIVE_ROOM,
    payload
});

const receiveRoomErrors = errors => ({
    type: RECEIVE_ROOM_ERRORS,
    errors
});

export const clearMessageNotification = roomId => ({
    type: CLEAR_MESSAGE_NOTIFICATION,
    roomId
});

export const clearRoomErrors = () => ({
    type: CLEAR_ROOM_ERRORS
})

export const fetchRooms = () => dispatch => (
    RoomAPIUtil.fetchRooms()
        .then(rooms => dispatch(receiveRooms(rooms)))
);

export const searchRooms = query => dispatch => (
    RoomAPIUtil.searchRooms(query)
        .then(payload => dispatch(receiveSearchedRooms(payload)))
);

export const fetchRoom = roomId => dispatch => (
    RoomAPIUtil.fetchRoom(roomId)
        .then(room => dispatch(receiveRoom(room)))
);

export const createRoom = room => dispatch => (
    RoomAPIUtil.createRoom(room)
        .then(room => dispatch(receiveRoom(room)))
        .fail(errors => dispatch(receiveRoomErrors(errors.responseJSON)))
);