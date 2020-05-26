import React, { useState } from 'react';
import styles from './message_form.module.css';

const MessageForm = ({ roomId, currentUserId }) => {
    const [message, setMessage] = useState('');
    const [subscription, setSubscription] = App.cable.subscriptions.subscriptions
        .filter(sub => JSON.parse(sub.identifier).id === roomId);

    function handleMessage(e) {
        setMessage(e.currentTarget.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        let newMessage = { 
            content: message,
            room_id: roomId,
            current_user_id: currentUserId,
        };
        subscription.speak(newMessage);
        setMessage('');
    };

    return (
        <div>
            MESSAGE FORM
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={message}
                    onChange={handleMessage}
                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default MessageForm;