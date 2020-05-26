import React from 'react';
import styles from './message_index.module.css';

const MessageIndexItem = ({ message }) => {

    return (
        <li>
            <span>{message.authorName}: </span>
            <span>{message.content}</span>
            
        </li>
    )
};

export default MessageIndexItem;