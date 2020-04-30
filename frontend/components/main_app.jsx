import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './header/header_container';

const MainApp = () => {

    return (
        <div>
            <HeaderContainer />
            <Switch>
                <Route path='/' component={RoomIndex}/>
            </Switch>
        </div>
    )
}

export default MainApp;
