import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './room_index.module.css';

const RoomIndexItem = ({ room }) => {
    let notified = (room.newMessage) ? styles.notified : ''
    return (
        <NavLink 
            activeClassName={styles.active}
            className={notified} 
            to={`/room/${room.id}`}
        >
            {room.name}
        </NavLink>
    );
};

export default RoomIndexItem;