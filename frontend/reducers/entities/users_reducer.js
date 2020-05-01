import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return oldState;
    }
};

export default userReducer;