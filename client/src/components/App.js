import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';
import store from '../store';

import PrivateRoute from './PrivateRoute';
import { Nav } from './Nav';
import { CompanyForm } from './CompanyForm';
import { Home } from "./Home";
import { CVForm } from "./CVForm";
import { RegisterUser } from "./RegisterUser";
import { Login } from "./Login";
import { Dashboard } from './Dashboard';
import { EditUser } from './EditUser';
import { EditCV } from './EditCV';
import { EditCompany } from './EditCompany';
import { ShowPage } from './ShowPage';
import { SearchPage } from './SearchPage';

//Check for token.
if (localStorage.jwtToken) {
    //Set auth token header authorization.
    setAuthToken(localStorage.jwtToken);
    //Decode token and get user data and token expiration info.
    const decodedToken = jwt_decode(localStorage.jwtToken);
    // Set current user and isAuthenticated.
    store.dispatch(setCurrentUser(decodedToken));
    //Check for expired token.
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
        //Logout user.
        store.dispatch(logoutUser());
        // Redirect to Login page.
        window.location.href = '/login'
    }
}

export class App extends React.Component {
    render() {
        return (
            <Provider store={ store }> 
                <BrowserRouter>
                    <div id="app">
                        <Nav />
                        <Route exact path="/" component={ Home } />
                        <Route path="/register-user" component={ RegisterUser } />
                        <Route path="/login" component={ Login } />
                        <Switch>
                            <PrivateRoute path="/dashboard" component={ Dashboard } />
                            <PrivateRoute path="/edituser" component={ EditUser } />
                            <PrivateRoute path="/company-form" component={ CompanyForm } />
                            <PrivateRoute path="/cv-form" component={ CVForm } />
                            <PrivateRoute path="/editcv/:id" component={ EditCV } />
                            <PrivateRoute path="/editcompany/:id" component={ EditCompany } />
                            <PrivateRoute path="/showpage/:id" component={ ShowPage } />
                            <PrivateRoute path="/search" component={ SearchPage } />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}