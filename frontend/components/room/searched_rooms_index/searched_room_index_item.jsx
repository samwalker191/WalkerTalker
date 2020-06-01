import React from 'react';
import connect from '../../../util/connect_util';

const SearchedRoomIndexItem = ({ 
    room, 
    joinRoom, 
    receiveMessage, 
    receiveMyMessage, 
    currentUserId 
}) => {

    function handleJoin() {
        joinRoom(room.id);
        connect(room.id, receiveMessage, receiveMyMessage, currentUserId);
    }
    return (
        <li>
            <span>{room.name}</span>
            <button onClick={handleJoin}>Join</button>
        </li>
    );
};

export default SearchedRoomIndexItem;