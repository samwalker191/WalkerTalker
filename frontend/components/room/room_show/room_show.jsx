import React, { useEffect } from 'react';
import styles from './room_show.module.css';

import MessageIndex from '../../messages/message_index/message_index';

const RoomShow = ({ room, fetchRoom, match, messages }) => {
    useEffect(() => {
        fetchRoom(match.params.roomId);
        App.cable.subscriptions.create(
            { channel: 'RoomsChannel', id: match.params.roomId },
            {
                speak: function (data) { return this.perform("speak", data) }
            }
        )
    }, []);

    if (!room) return null;
    return (
        <div className={styles.roomShowContainer}>
            <header>
                <h3>{room.name}</h3>
            </header>
            <MessageIndex messages={messages}/>
        </div>
    );
};

export default RoomShow;