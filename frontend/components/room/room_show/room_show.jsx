import React, { useEffect } from 'react';
import styles from './room_show.module.css';

const RoomShow = ({ room, fetchRoom, match }) => {
    useEffect(() => {
        fetchRoom(match.params.roomId);
        App.cable.subscriptions.create(
            
        )
    }, [])

    if (!room) return null;
    return (
        <div className={styles.roomShowContainer}>
            <header>
                <h3>{room.name}</h3>
            </header>
            <div>MESSAGE INDEX GOES HERE</div>
        </div>
    );
};

export default RoomShow;