import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import activeRoomReducer from './active_room_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    activeRoom: activeRoomReducer
});

export default uiReducer;