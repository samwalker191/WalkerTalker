import React from 'react';
import styles from './message_index.module.css';

const MessageIndex = ({ messages }) => {

    return (
        <ul>
            {messages.map(message => {
                return <li key={message.id}>{message.content}</li>
            })}
        </ul>
    );
};

export default MessageIndex;