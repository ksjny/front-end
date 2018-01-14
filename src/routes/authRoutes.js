import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../auth/login'
import SignUp from '../auth/signUp'

export default class AuthRoutes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/auth/login" component={Login} />               
                <Route exact path="/auth/signup" component={SignUp}/>
                <Redirect to="/"/>
            </Switch>
        )
    }
}