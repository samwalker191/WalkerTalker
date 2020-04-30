import React from 'react';
import { Link } from 'react-router-dom';
import styles from './splash.module.css';

const Splash = () => {

    return (
        <div className={styles.splash}>
            <div>
                <span>LOGO HERE</span>
                <Link to='signin'>Sign in</Link>
            </div>
            <main>
                <div>
                    Walk the walk.
                    Talk the talk.
                    WalkerTalker
                </div>
                <div>
                    <Link to='signup'>Join now</Link>
                </div>
            </main>
        </div>
    )
};

export default Splash;