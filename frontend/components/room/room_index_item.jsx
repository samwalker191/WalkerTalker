import React from 'react';

const RoomIndexItem = ({ room }) => {

    return (
        <li>
            <span>{room.name}</span>
        </li>
    );
};

export default RoomIndexItem;