import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './room_index.module.css';

const RoomIndexItem = ({ room }) => {

    return (
        <NavLink 
            activeClassName={styles.active} 
            to={`/room/${room.id}`}
        >
            {room.name}
        </NavLink>
    );
};

export default RoomIndexItem;