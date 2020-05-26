import React, { useState } from 'react';
import styles from './room_form.module.css';

import connect from '../../../util/connect_util';

const RoomForm = ({ formType, action, currentRoom, closeModal, roomErrors, receiveMessage }) => {
    const [room, setRoom] = useState(currentRoom);

    function update(field) {
        return e => setRoom({ ...room, [field]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        action(room)
            .then((action) => {
                connect(action.payload.room.id, receiveMessage);
                closeModal();
            });
    }

    return (
        <div className={styles.roomFormContainer}>
            <h3>{formType}</h3>
            <form onSubmit={handleSubmit} className={styles.inputs}>
                <input
                    type="text"
                    value={room.name}
                    onChange={update('name')}
                    placeholder='Room Name'
                    autoComplete='roomName'
                />

                <input
                    type="password"
                    value={room.password}
                    onChange={update('password')}
                    placeholder='Password (optional)'
                    autoComplete='new-password'
                />

                <input type="submit" className={styles.submit}/>
            </form>

            <ul className={styles.errors}>
                {roomErrors.map((error, id) => <li key={id}>{error}</li>)}
            </ul>

            <div className={styles.roomFormButtons}>
                <button className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                <button className={styles.submitButton} onClick={handleSubmit}>Add Room!</button>
            </div>
        </div>
    );
};

export default RoomForm;