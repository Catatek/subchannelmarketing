import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Index from '../screens/Index/Index';
import { HashRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
