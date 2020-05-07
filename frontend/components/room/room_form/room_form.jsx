import React, { useState } from 'react';

const RoomForm = ({ formType, action, currentRoom }) => {
    const [room, setRoom] = useState(currentRoom);

    function update(field) {
        return e => setRoom({ ...room, [field]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        action(room);
    }

    return (
        <div>
            <h2>{formType}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={room.name}
                    onChange={update('name')}
                    placeholder='Room Name'
                    autoComplete='roomName'
                />

                <input
                    type="password"
                    value={room.password}
                    onChange={update('password')}
                    placeholder='Password (optional)'
                    autoComplete='new-password'
                />

                <input type="submit" value="Add Room!"/>
            </form>
        </div>
    );
};

export default RoomForm;