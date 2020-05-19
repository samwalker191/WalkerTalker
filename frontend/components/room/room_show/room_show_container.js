import { connect } from 'react-redux';
import { fetchRoom } from '../../../actions/room_actions';
import { messagesByRoom } from '../../../selectors/messages_selectors';
import RoomShow from './room_show';

const mSTP = ({ entities: { rooms, messages }}, { match }) => ({
    room: rooms[match.params.roomId],
    messages: messagesByRoom(messages, rooms[match.params.roomId])
});

const mDTP = dispatch => ({
    fetchRoom: roomId => dispatch(fetchRoom(roomId))
});

export default connect(mSTP, mDTP)(RoomShow);