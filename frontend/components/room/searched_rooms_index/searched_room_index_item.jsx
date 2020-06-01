import React from 'react';

const SearchedRoomIndexItem = ({ room, joinRoom }) => {
    return (
        <li>
            <span>{room.name}</span>
            <button onClick={() => joinRoom(room.id)}>Join</button>
        </li>
    );
};

export default SearchedRoomIndexItem;