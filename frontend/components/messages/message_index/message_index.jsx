import React from 'react';
import styles from './message_index.module.css';
import MessageIndexItem from './message_index_item';

const MessageIndex = ({ messages }) => {

    return (
        <ul>
            {messages.map(message => {
                return <MessageIndexItem key={message.id} message={message}/>
            })}
        </ul>
    );
};

export default MessageIndex;