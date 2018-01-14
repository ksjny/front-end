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
import AboutUs from './aboutUs'
import Main from './main/main'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import { Provider } from 'react-redux'
import PrivateRoute from './routes/privateRoute'

let store = createStore(reducers, {}, applyMiddleware(reduxThunk))

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated : false
    }

    this.authenticateUser = this.authenticateUser.bind(this)
  }

  authenticateUser() {
    this.setState({ isAuthenticated : true })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={props => <Login authenticateUser={this.authenticateUser} {...props}/>} />               
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/About" component={AboutUs}/>
            <PrivateRoute path="/main" isAuthenticated={this.state.isAuthenticated} component={Main} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
