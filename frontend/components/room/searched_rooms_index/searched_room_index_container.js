import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { searchRooms, joinRoom } from '../../../actions/room_actions';
import { receiveMessage, receiveMyMessage } from '../../../actions/message_actions';
import { searchedRoomsByIds } from '../../../selectors/rooms_selectors';
import SearchedRoomIndex from './searched_room_index';

const mSTP = ({ session, ui: { searchedRooms }, entities: { rooms } }) => {
    return ({
        rooms: searchedRoomsByIds(searchedRooms, rooms),
        currentUserId: session.id
    });
};

const mDTP = dispatch => ({
    searchRooms: query => dispatch(searchRooms(query)),
    joinRoom: roomId => dispatch(joinRoom(roomId)),
    closeModal: () => dispatch(closeModal()),
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveMyMessage: message => dispatch(receiveMyMessage(message))
});

export default connect(mSTP, mDTP)(SearchedRoomIndex);