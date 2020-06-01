import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import activeRoomReducer from './active_room_reducer';
import searchedRoomsReducer from './searched_rooms_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    activeRoom: activeRoomReducer,
    searchedRooms: searchedRoomsReducer
});

export default uiReducer;