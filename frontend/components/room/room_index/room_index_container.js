import { connect } from 'react-redux';
import { fetchRooms } from '../../../actions/room_actions';
import { openModal } from '../../../actions/modal_actions';
import { allRoomsForCurrentUser } from '../../../selectors/rooms_selectors';
import RoomIndex from './room_index'

// ROADBLOCK: selector was not getting new info from state when a new room was added
// selector was using users slice of state to get all ownedRoomIds
// This array of ids was not being updated in state when a new room was created by current user
const mSTP = ({ session, entities: { users, rooms } }) => {
    return ({
        rooms: allRoomsForCurrentUser(session, users, rooms)
    })
};

const mDTP = dispatch => ({
    fetchRooms: () => dispatch(fetchRooms()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(RoomIndex);