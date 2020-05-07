import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import roomErrorsReducer from './room_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    roomErrors: roomErrorsReducer
});

export default errorsReducer;