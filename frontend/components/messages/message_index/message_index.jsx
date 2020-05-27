import React, { useEffect } from 'react';
import styles from './message_index.module.css';
import MessageIndexItem from './message_index_item';

const MessageIndex = ({ messages }) => {
    useEffect(() => {
        let messageIndexContainer = document.getElementById('message-index');
        messageIndexContainer.scrollTop = messageIndexContainer.scrollHeight;
    }, [messages]);
    
    return (
        <ul id='message-index' className={styles.messageIndex}>
            {messages.map(message => {
                return <MessageIndexItem key={message.id} message={message}/>
            })}
        </ul>
    );
};

export default MessageIndex;