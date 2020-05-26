import { RECEIVE_ROOMS, RECEIVE_ROOM } from '../../actions/room_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';

const roomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_ROOMS:
            return Object.assign({}, oldState, action.rooms);
        case RECEIVE_ROOM:
            return Object.assign({}, oldState, { [action.payload.room.id]: action.payload.room });
        case RECEIVE_MESSAGE:
            let room = nextState[action.message.roomId];
            if (room.messageIds) {
                room.messageIds.push(action.message.id);
            }
            return nextState;
        default:
            return oldState;
    }
};

export default roomsReducer;