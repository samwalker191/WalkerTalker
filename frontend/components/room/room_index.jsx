import React, { useEffect } from 'react'
import RoomIndexItem from './room_index_item';
import styles from './room_index.module.css';

const RoomIndex = ({ rooms, fetchRooms }) => {
    useEffect(() => {
        fetchRooms();
    }, [])

    if (!rooms[0]) return null; 
    return (
        <div className={styles.indexContainer}>
            <h2>Chat Rooms</h2>
            <ul>
                {rooms.map(room => {
                    return <RoomIndexItem key={room.id} room={room} />
                })}
            </ul>
        </div>
    );
};

export default RoomIndex;