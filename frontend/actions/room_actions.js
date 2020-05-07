import * as RoomAPIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOM_ERRORS = 'RECEIVE_ROOM_ERRORS';
export const CLEAR_ROOM_ERRORS = 'CLEAR_ROOM_ERRORS';

const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

const receiveRoom = room => ({
    type: RECEIVE_ROOM,
    room
});

const receiveRoomErrors = errors => ({
    type: RECEIVE_ROOM_ERRORS,
    errors
});

export const clearRoomErrors = () => ({
    type: CLEAR_ROOM_ERRORS
})

export const fetchRooms = () => dispatch => (
    RoomAPIUtil.fetchRooms()
        .then(rooms => dispatch(receiveRooms(rooms)))
);

export const createRoom = room => dispatch => (
    RoomAPIUtil.createRoom(room)
        .then(room => dispatch(receiveRoom(room)))
        .fail(errors => dispatch(receiveRoomErrors(errors.responseJSON)))
);