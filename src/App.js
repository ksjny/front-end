import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import LoginForm from './auth/login.js'

import Home from './home'
import Dashboard from './main/dashboard'
import Profile from './main/profile'
import Login from './auth/login'
import SignUp from './auth/signUp'
import Main from './main/main'

import PrivateRoute from './routes/privateRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />               
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/main" component={Dashboard} />
          */}
          <Route exact path="/" component={Home} />
          {/*
          <Route exact path="/login" component={Login} />               
          <Route exact path="/signup" component={SignUp}/>*/}
          <PrivateRoute path="/main" isAuthenticated={true} component={Main} />
        </Switch>
      </Router>

    );
  }
}

export default App;
