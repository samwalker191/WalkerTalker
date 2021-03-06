import React from 'react';
import { Link } from 'react-router-dom';
import styles from './splash.module.css';
import HeaderContainer from '../header/header_container';

const Splash = () => {

    return (
        <div className={styles.splash}>
            {/* <div className={styles.header}>
                <Link to='/splash'><img src="https://i.ibb.co/BLmXKWF/walker-talker-color.png" alt="logo"/></Link>
                <Link className={styles.signIn} to='signin'>Sign in</Link>
            </div> */}
            <HeaderContainer />
            <main>
                <div className={styles.text}>
                    <span>Walk the walk</span>
                    <span>Talk the talk</span>
                    <Link to='/splash' className={styles.logo}>WalkerTalker</Link>
                </div>
                <Link to='signup' className={styles.signUp}>Join now</Link>
                <img src="https://i.ibb.co/N7VZdG4/walking.jpg" alt="walking"/>
            </main>
        </div>
    )
};

export default Splash;