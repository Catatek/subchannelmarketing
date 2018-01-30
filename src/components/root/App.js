import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Index from '../Index/Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
