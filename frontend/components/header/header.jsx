import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = props => {
    let { currentUserId, currentUser, logout } = props;
    let authButton;
    if (!currentUserId) {
        authButton = <Link to='/signin' className='header-signin'>
            <span>SIGN IN</span>
        </Link>
    } else {
        authButton = <button className={styles.logout} onClick={() => logout()}>
            <div>
                {/* {currentUser.username.slice(0, 1).toUpperCase()} */}
                LOGOUT
            </div>
            {/* <span>LOGOUT</span> */}
        </button>
    }

    return (
        <div className={styles.header}>
            {authButton}
        </div>
    )
};

export default Header;