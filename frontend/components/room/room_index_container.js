import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';
import { allRoomsForCurrentUser } from '../../selectors/rooms_selectors';
import RoomIndex from './room_index'

const mSTP = state => ({
    rooms: allRoomsForCurrentUser(state)
});

const mDTP = dispatch => ({
    fetchRooms: () => dispatch(fetchRooms())
});

export default connect(mSTP, mDTP)(RoomIndex);