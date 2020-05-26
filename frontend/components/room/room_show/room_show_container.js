import { connect } from 'react-redux';
import { fetchRoom } from '../../../actions/room_actions';
import { receiveMessage } from '../../../actions/message_actions';
import { messagesByRoom } from '../../../selectors/messages_selectors';
import RoomShow from './room_show';

const mSTP = ({ 
    entities: { rooms, messages },
    session: { id },
    ui: { activeRoom }},
    { match }
) => ({
    room: rooms[match.params.roomId],
    messages: messagesByRoom(messages, rooms[match.params.roomId]),
    currentUserId: id,
    activeRoomId: activeRoom
});

const mDTP = dispatch => ({
    fetchRoom: roomId => dispatch(fetchRoom(roomId)),
    receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(mSTP, mDTP)(RoomShow);