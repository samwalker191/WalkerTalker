import React from 'react';
import styles from './message_index.module.css';

const MessageIndexItem = ({ message }) => {

    return (
        <li className={styles.message}>
            <h4>{message.authorName}: </h4>
            <p>{message.content}</p>
        </li>
    );
};

export default MessageIndexItem;