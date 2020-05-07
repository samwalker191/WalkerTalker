import { connect } from 'react-redux';
import RoomForm from './room_form';
import { createRoom, clearRoomErrors } from '../../../actions/room_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = ({ errors: { roomErrors }}) => ({
    formType: 'Create a Room',
    currentRoom: { name: '', password: '' },
    roomErrors
});

const mDTP = dispatch => ({
    action: room => dispatch(createRoom(room)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearRoomErrors())
})

export default connect(mSTP, mDTP)(RoomForm);