import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { searchRooms } from '../../../actions/room_actions';
import { searchedRoomsByIds } from '../../../selectors/rooms_selectors';
import SearchedRoomIndex from './searched_room_index';

const mSTP = ({ ui: { searchedRooms }, entities: { rooms } }) => {
    return ({
        rooms: searchedRoomsByIds(searchedRooms, rooms)
    });
};

const mDTP = dispatch => ({
    searchRooms: query => dispatch(searchRooms(query)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SearchedRoomIndex);