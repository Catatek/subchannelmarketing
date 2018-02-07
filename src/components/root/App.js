import React, { Component } from "react";
import {
  HashRouter,
  Switch,
  Link,
  Route,
  BrowserHistory
} from "react-router-dom";
import Index from "../screens/Index/Index";
import ComingSoon from "../screens/ComingSoon/ComingSoon";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ComingSoon} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
