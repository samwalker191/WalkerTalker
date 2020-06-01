import { RECEIVE_SEARCHED_ROOMS, RECEIVE_ROOM } from '../../actions/room_actions';

const searchedRoomsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SEARCHED_ROOMS:
            return action.roomIds;
        case RECEIVE_ROOM:
            let nextState = oldState.slice();
            let index = nextState.indexOf(action.payload.room.id);
            nextState.splice(index, 1);
            return nextState;
        default:
            return oldState;
    }
};

export default searchedRoomsReducer;