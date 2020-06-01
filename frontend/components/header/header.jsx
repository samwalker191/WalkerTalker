import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = props => {
    let { currentUserId, currentUser, logout } = props;
    let authButton;

    function handleLogout() {
        App.cable.subscriptions.subscriptions.forEach(sub => sub.unsubscribe());
        logout();
    };

    if (!currentUserId) {
        authButton = <Link to='/signin' className={styles.login}>
            <span>Sign In</span>
        </Link>
    } else {
        authButton = <div className={styles.logout}>
            <span>Hello, {currentUser.username}</span>
            <button className={styles.authButton} onClick={handleLogout}>
                <div>
                    Logout
                </div>
            </button>
        </div>
    }

    return (
        <div className={styles.header}>
            <Link to='/splash' className={styles.logo}>
                <img src="https://i.ibb.co/BLmXKWF/walker-talker-color.png" alt="logo" />
            </Link>
            <div>
                {authButton}
            </div>
        </div>
    )
};

export default Header;