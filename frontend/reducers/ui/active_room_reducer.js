import { RECEIVE_ROOM } from '../../actions/room_actions';

const activeRoomReducer = (oldState = null, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ROOM:
            return action.payload.room.id;
        default:
            return oldState;
    }
};

export default activeRoomReducer;