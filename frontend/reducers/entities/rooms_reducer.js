import { RECEIVE_ROOMS, RECEIVE_ROOM } from '../../actions/room_actions';

const roomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_ROOMS:
            return Object.assign({}, oldState, action.rooms);
        case RECEIVE_ROOM:
            return Object.assign({}, oldState, { [action.payload.room.id]: action.payload.room });
        default:
            return oldState;
    }
};

export default roomsReducer;