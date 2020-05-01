import * as RoomAPIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';

const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

export const fetchRooms = () => dispatch => (
    RoomAPIUtil.fetchRooms()
        .then(rooms => dispatch(receiveRooms(rooms)))
);