import { RECEIVE_SEARCHED_ROOMS } from '../../actions/room_actions';

const searchedRoomsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SEARCHED_ROOMS:
            return action.roomIds;
        default:
            return oldState;
    }
};

export default searchedRoomsReducer;