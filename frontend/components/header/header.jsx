import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = props => {
    let { currentUserId, currentUser, logout } = props;
    let authButton;

    function handleLogout() {
        debugger
        App.cable.subscriptions.subscriptions.forEach(sub => sub.unsubscribe());
        logout();
    };

    if (!currentUserId) {
        authButton = <Link to='/signin' className={styles.authButton}>
            <span>Sign In</span>
        </Link>
    } else {
        authButton = <button className={styles.authButton} onClick={handleLogout}>
            <div>
                Logout
            </div>
        </button>
    }

    return (
        <div className={styles.header}>
            <Link to='/splash' className={styles.logo}>
                <img src="https://i.ibb.co/BLmXKWF/walker-talker-color.png" alt="logo" />
            </Link>
            {authButton}
        </div>
    )
};

export default Header;