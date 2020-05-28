import React, { useState } from 'react';
import styles from './message_form.module.css';

const MessageForm = ({ room, currentUserId }) => {
    const [message, setMessage] = useState('');
    const [subscription, setSubscription] = App.cable.subscriptions.subscriptions
        .filter(sub => JSON.parse(sub.identifier).id === room.id);

    function handleMessage(e) {
        setMessage(e.currentTarget.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        let newMessage = { 
            content: message,
            room_id: room.id,
            current_user_id: currentUserId,
        };
        subscription.speak(newMessage);
        setMessage('');
    };

    return (
        <div className={styles.messageFormContainer}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={message}
                    onChange={handleMessage}
                    placeholder={`Message ${room.name}`}
                />
                <input type="submit" className={styles.submit}/>
            </form>
        </div>
    );
};

export default MessageForm;