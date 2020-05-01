import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './header/header_container';
// import RoomIndexContainer from './room/room_index_container';

const MainApp = () => {

    return (
        <div>
            <HeaderContainer />
            <Switch>
                {/* <Route path='/' component={RoomIndexContainer}/> */}
            </Switch>
        </div>
    )
}

export default MainApp;
