import { RECEIVE_ROOM } from '../../actions/room_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';

const messagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_ROOM:
            return Object.assign({}, oldState, action.payload.messages);
        case RECEIVE_MESSAGE:
            return Object.assign({}, oldState, { [action.message.id]: action.message });
        default:
            return oldState;
    }
};

export default messagesReducer;