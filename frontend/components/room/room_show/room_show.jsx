import React, { useEffect } from 'react';
import styles from './room_show.module.css';

import MessageIndex from '../../messages/message_index/message_index';
import MessageForm from '../../messages/message_form/message_form';

const RoomShow = ({ room, fetchRoom, match, messages, currentUserId, receiveMessage }) => {
    useEffect(() => {
        fetchRoom(match.params.roomId);
        App.cable.subscriptions.create(
            { channel: 'RoomsChannel', id: match.params.roomId },
            {
                speak: function (data) { return this.perform("speak", data); },
                received: function (message) { receiveMessage(message); }
            }
        )
    }, []);

    if (!room) return null;
    return (
        <div className={styles.roomShowContainer}>
            <header>
                <h3>{room.name}</h3>
            </header>
            <MessageIndex messages={messages} />
            <MessageForm roomId={room.id} currentUserId={currentUserId} />
        </div>
    );
};

export default RoomShow;