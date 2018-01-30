import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Link,
  Route,
  BrowserHistory,
} from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import Index from '../Index/Index';
import LiveBroadcast from '../LiveBroadcast/LiveBroadcast'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/" component={LiveBroadcast} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
