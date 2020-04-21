import React from 'react'
import { Link } from 'react-router-dom';

const Header = props => {
    let { currentUserId, currentUser, logout } = props;
    let authButton;
    if (!currentUserId) {
        authButton = <Link to='/signin' className='header-signin'>
            <span>SIGN IN</span>
        </Link>
    } else {
        authButton = <button className='header-logout' onClick={() => logout()}>
            <div>
                {/* {currentUser.username.slice(0, 1).toUpperCase()} */}
                LOGOUT
            </div>
            {/* <span>LOGOUT</span> */}
        </button>
    }
    return (
        <div>
            {authButton}
        </div>
    )
};

export default Header;