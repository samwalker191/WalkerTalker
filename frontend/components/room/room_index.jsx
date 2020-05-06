import React, { useEffect, useState } from 'react'
import RoomIndexItem from './room_index_item';
import styles from './room_index.module.css';

const RoomIndex = ({ rooms, fetchRooms }) => {
    useEffect(() => {
        fetchRooms();
    }, [])

    const [showDropdown, setDropdown] = useState(false);

    function toggleDropdown() {
        setDropdown(!!showDropdown);
    }

    function dropdownMenu() {
        if (showDropdown) {
            return (
                <ul className={styles.dropdown}>
                    <li>Create Chat Room</li>
                </ul>
            )
        } else {
            return null;
        }
    }

    if (!rooms[0]) return null; 
    return (
        <div className={styles.indexContainer}>
            <div className={styles.header}>
                <h2>Chat Rooms</h2>
                <button>+</button>
            </div>
            {dropdownMenu()}
            <ul>
                {rooms.map(room => {
                    return <RoomIndexItem key={room.id} room={room} />
                })}
            </ul>
        </div>
    );
};

export default RoomIndex;