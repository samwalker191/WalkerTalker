import { RECEIVE_ROOM } from '../../actions/room_actions';

const messagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = { ...oldState };
    switch (action.type) {
        case RECEIVE_ROOM:
            return Object.assign({}, oldState, action.payload.messages);
        default:
            return oldState;
    }
};

export default messagesReducer;