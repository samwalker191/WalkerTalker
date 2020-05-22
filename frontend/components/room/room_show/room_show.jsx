import React, { useEffect } from 'react';
import styles from './room_show.module.css';
import connect from '../../../util/connect_util';

import MessageIndex from '../../messages/message_index/message_index';
import MessageForm from '../../messages/message_form/message_form';

const RoomShow = ({ room, fetchRoom, match, messages, currentUserId, receiveMessage }) => {
    useEffect(() => {
        fetchRoom(match.params.roomId);
        connect(match.params.roomId, receiveMessage);
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