import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../main/dashboard'
import Profile from '../main/profile'

export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/main/dashboard" component={Dashboard} />               
                <Route exact path="/main/profile" component={Profile}/>
                <Redirect to="/main/dashboard"/>
            </Switch>
        )
    }
}