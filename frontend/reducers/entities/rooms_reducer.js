import { RECEIVE_ROOMS, RECEIVE_ROOM, CLEAR_MESSAGE_NOTIFICATION } from '../../actions/room_actions';
import { RECEIVE_MESSAGE, RECEIVE_MY_MESSAGE } from '../../actions/message_actions';

const roomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };
    let room;
    switch (action.type) {
        case RECEIVE_ROOMS:
            return Object.assign({}, oldState, action.rooms);
        case RECEIVE_ROOM:
            return Object.assign({}, oldState, { [action.payload.room.id]: action.payload.room });
        case RECEIVE_MESSAGE:
            room = nextState[action.message.roomId];
            room.newMessage = true;
            if (room.messageIds) {
                room.messageIds.push(action.message.id);
            }
            return nextState;
        case RECEIVE_MY_MESSAGE:
            room = nextState[action.message.roomId];
            room.newMessage = false;
            if (room.messageIds) {
                room.messageIds.push(action.message.id);
            }
            return nextState;
        case CLEAR_MESSAGE_NOTIFICATION:
            room = nextState[action.roomId];
            room.newMessage = false;
            return nextState;
        default:
            return oldState;
    }
};

export default roomsReducer;