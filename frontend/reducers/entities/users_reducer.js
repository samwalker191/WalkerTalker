import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ROOM } from '../../actions/room_actions';

const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {}
        case RECEIVE_ROOM:
            let updatedUser = action.payload.user
            return Object.assign({}, oldState, { [updatedUser.id]: updatedUser })
        default:
            return oldState;
    }
};

export default userReducer;