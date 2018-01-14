import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../main/dashboard'
import Profile from '../main/profile'
import Medicine from '../main/medicine'
import Diagnosis from '../main/diagnosis'

export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/main/dashboard" component={Dashboard} />               
                <Route exact path="/main/profile" component={Profile}/>
                <Route exact path="/main/medicine" component={Medicine}/>
                <Route exact path="/main/diagnosis" component={Diagnosis}/>
                <Redirect to="/main/dashboard"/>
            </Switch>
        )
    }
}