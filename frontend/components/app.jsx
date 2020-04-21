import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
 
import SignInFormContainer from './session/sign_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import HeaderContainer from './header/header_container';

const App = props => {

    return (
        <div>
            <HeaderContainer />
            <AuthRoute exact path='/signin' component={SignInFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </div>
    )
};

export default App;