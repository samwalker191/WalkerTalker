import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Splash from './splash/splash'; 
import SignInFormContainer from './session/sign_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import MainApp from './main_app/main_app';

const App = props => {

    return (
        <div>
            <Switch >
                <AuthRoute exact path='/signin' component={SignInFormContainer} />
                <AuthRoute exact path='/signup' component={SignUpFormContainer} />
                <AuthRoute path='/splash' component={Splash} />
                <ProtectedRoute path='/' component={MainApp} />
            </Switch>
        </div>
    )
};

export default App;