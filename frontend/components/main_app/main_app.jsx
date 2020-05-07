import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Modal from '../modal/modal';
import HeaderContainer from '../header/header_container';
import RoomIndexContainer from '../room/room_index/room_index_container';
import RoomShowContainer from '../room/room_show/room_show_container';

import styles from './main_app.module.css';

const MainApp = () => {

    return (
        <div>
            <Modal />
            <HeaderContainer />
            <div className={styles.content}>
                <Route path='/' component={RoomIndexContainer}/>
                <Route path='/room/:roomId' component={RoomShowContainer}/>
            </div>
        </div>
    )
}

export default MainApp;
