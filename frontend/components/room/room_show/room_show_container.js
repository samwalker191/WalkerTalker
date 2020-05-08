import { connect } from 'react-redux';
import { fetchRoom } from '../../../actions/room_actions';
import RoomShow from './room_show';

const mSTP = ({ entities: { rooms }}, { match }) => ({
    room: rooms[match.params.roomId]
});

const mDTP = dispatch => ({
    fetchRoom: roomId => dispatch(fetchRoom(roomId))
});

export default connect(mSTP, mDTP)(RoomShow);