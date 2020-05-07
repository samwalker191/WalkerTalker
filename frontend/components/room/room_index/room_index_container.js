import { connect } from 'react-redux';
import { fetchRooms } from '../../../actions/room_actions';
import { openModal } from '../../../actions/modal_actions';
import { allRoomsForCurrentUser } from '../../../selectors/rooms_selectors';
import RoomIndex from './room_index'

//{ session, entities: { users, rooms } }

const mSTP = (state) => ({
    // rooms: allRoomsForCurrentUser(session, users, rooms)
    rooms: Object.values(state.entities.rooms)
});

const mDTP = dispatch => ({
    fetchRooms: () => dispatch(fetchRooms()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(RoomIndex);