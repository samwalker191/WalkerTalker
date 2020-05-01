import { RECEIVE_ROOMS } from '../../actions/room_actions';

const roomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_ROOMS:
            return Object.assign({}, oldState, action.rooms);
        default:
            return oldState;
    }
};

export default roomsReducer;