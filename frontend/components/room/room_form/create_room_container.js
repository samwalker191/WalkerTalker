import { connect } from 'react-redux';
import RoomForm from './room_form';
import { createRoom } from '../../../actions/room_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = state => ({
    formType: 'Create a Room',
    currentRoom: { name: '', password: '' }
});

const mDTP = dispatch => ({
    action: room => dispatch(createRoom(room)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(RoomForm);