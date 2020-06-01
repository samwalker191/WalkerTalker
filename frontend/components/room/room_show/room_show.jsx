import React, { useEffect, useRef } from 'react';
import styles from './room_show.module.css';

import MessageIndex from '../../messages/message_index/message_index';
import MessageForm from '../../messages/message_form/message_form';

const RoomShow = ({ room, fetchRoom, match, messages, currentUserId, clearMessageNotification }) => {
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };
    let prevRoomId = usePrevious(match.params.roomId);
    
    useEffect(() => {
        fetchRoom(match.params.roomId)
        
        if (prevRoomId) {
            clearMessageNotification(prevRoomId);
        }
    }, [match.params.roomId]);

    if (!room) return null;
    if (!messages[0]) return null;
    return (
        <div id='room-show' className={styles.roomShowContainer}>
            <header>
                <h3>{room.name}</h3>
            </header>
            <MessageIndex messages={messages} />
            <MessageForm 
                room={room} 
                currentUserId={currentUserId} 
                activeRoomId={match.params.roomId}
            />
        </div>
    );
};

export default RoomShow;