import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './auth/login.js'

class App extends Component {
  render() {
    return (
      <LoginForm/>
    );
  }
}

export default App;
