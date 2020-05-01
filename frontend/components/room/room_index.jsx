import React, { useEffect } from 'react'
import RoomIndexItem from './room_index_item';

const RoomIndex = ({ rooms, fetchRooms }) => {
    useEffect(() => {
        fetchRooms();
    }, [])

    if (!rooms[0]) return null; 
    return (
        <div>
            <ul>
                {rooms.map(room => {
                    return <RoomIndexItem key={room.id} room={room} />
                })}
            </ul>
        </div>
    );
};

export default RoomIndex;