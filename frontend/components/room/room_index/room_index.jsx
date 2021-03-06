import React, { useEffect, useState } from 'react'
import RoomIndexItem from './room_index_item';
import styles from './room_index.module.css';

import connect from '../../../util/connect_util';

const RoomIndex = ({ 
    rooms, 
    fetchRooms, 
    openModal, 
    history, 
    receiveMessage, 
    receiveMyMessage,
    currentUserId
}) => {
    const [alreadyConnected, setAlreadyConnected] = useState(false);
    const [showDropdown, setDropdown] = useState(false);

    useEffect(() => {
        fetchRooms().then(action => {
            let firstRoomId = Object.keys(action.rooms)[0];
            history.push(`/room/${firstRoomId}`);
        })
        document.addEventListener('mousedown', handleDocClick, false);
        return () => document.removeEventListener('mousedown', handleDocClick, false);
    }, [])

    useEffect(() => {
        if (rooms[0]) {
            if (!alreadyConnected) {
                setAlreadyConnected(true);
                rooms.forEach(room => {
                    connect(room.id, receiveMessage, receiveMyMessage, currentUserId);
                });
            }
        }
    }, [rooms])

    function toggleDropdown(e) {
        setDropdown(!showDropdown);
    }

    function handleModal(modal) {

        return e => {
            setDropdown(false);
            openModal(modal);
        }
    }

    function dropdownMenu() {
        if (showDropdown) {
            return (
                <ul className={styles.dropdown} id='room-dropdown'>
                    <li onClick={handleModal('searchRooms')}>Browse Chat Rooms</li>
                    <li onClick={handleModal('addRoom')}>Create Chat Room</li>
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