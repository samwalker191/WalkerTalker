import React from 'react';
import styles from './message_index.module.css';

import formatDate from '../../../util/date_util';

const MessageIndexItem = ({ message }) => {
    let date;
    if (message) {
        date = new Date(message.createdAt);
        date = formatDate(date);
    }
    return (
        <li className={styles.message}>
            <div className={styles.messageHeader}>
                <h4>{message.authorName}</h4>
                <span>{date}</span>
            </div>
            <p>{message.content}</p>
        </li>
    );
};

export default MessageIndexItem;