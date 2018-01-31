import React, { Component } from "react";
import {
  HashRouter,
  Switch,
  Link,
  Route,
  BrowserHistory
} from "react-router-dom";
import Index from "../screens/Index/Index";

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
