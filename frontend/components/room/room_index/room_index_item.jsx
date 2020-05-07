import React from 'react';
import { Link } from 'react-router-dom';

const RoomIndexItem = ({ room }) => {

    return (
        <Link to={`/room/${room.id}`}>{room.name}</Link>
    );
};

export default RoomIndexItem;