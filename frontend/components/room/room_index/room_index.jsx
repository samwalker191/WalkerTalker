import React, { useEffect, useState } from 'react'
import RoomIndexItem from './room_index_item';
import styles from './room_index.module.css';

const RoomIndex = ({ rooms, fetchRooms, openModal }) => {
    
    const [showDropdown, setDropdown] = useState(false);
    
    useEffect(() => {
        fetchRooms();
        document.addEventListener('mousedown', handleDocClick, false);
        return () => document.removeEventListener('mousedown', handleDocClick, false);
    }, [])

    function toggleDropdown(e) {
        setDropdown(!showDropdown);
    }

    function handleModal() {
        setDropdown(false);
        openModal('addRoom');
    }

    function dropdownMenu() {
        if (showDropdown) {
            return (
                <ul className={styles.dropdown} id='room-dropdown'>
                    <li>Browse Chat Rooms</li>
                    <li onClick={handleModal}>Create Chat Room</li>
                </ul>
            )
        } else {
            return null;
        }
    }

    function handleDocClick(e) {
        let dropdownBox = document.getElementById('room-dropdown');
        let addRoomButton = document.getElementById('add-room');
        if (!dropdownBox) return null;
        if (e.target !== dropdownBox && !dropdownBox.contains(e.target) && e.target !== addRoomButton && !addRoomButton.contains(e.target)) {
            // could not pass in !showDropdown to setDropdown because this function was closing over showDropdown. 
            // Therefore, it was always going to be toggling false to true
            setDropdown(false);
        }
    }
    
    debugger;
    if (!rooms[0]) return null; 
    return (
        <div className={styles.indexContainer}>
            <div className={styles.header}>
                <h2>Chat Rooms</h2>
                <div>
                    <button onClick={toggleDropdown} id='add-room'>+</button>
                    {dropdownMenu()}
                </div>
            </div>
            <ul className={styles.roomList}>
                {rooms.map(room => {
                    return <RoomIndexItem key={room.id} room={room} />
                })}
            </ul>
        </div>
    );
};

export default RoomIndex;