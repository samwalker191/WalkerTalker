import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import styles from './modal.module.css';

import CreateRoomContainer from '../room/room_form/create_room_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'addRoom':
            component = <CreateRoomContainer />
            break;
        default:
            return null;
    }
    return (
        <div className={styles.modalBackground} onClick={closeModal}>
            <div className={styles.modalChild} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapSTP = ({ ui: { modal } }) => {
    return {
        modal
    };
};

const mapDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapSTP, mapDTP)(Modal);