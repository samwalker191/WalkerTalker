import { RECEIVE_ROOM_ERRORS, RECEIVE_ROOM, CLEAR_ROOM_ERRORS } from '../../actions/room_actions';

const roomErrorsReducer = (oldState = [], action) => {

    switch (action.type) {
        case RECEIVE_ROOM_ERRORS:
            return action.errors;
        case RECEIVE_ROOM:
            return [];
        case CLEAR_ROOM_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default roomErrorsReducer;