import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "../screens/Index/Index";
import ComingSoon from "../screens/ComingSoon/ComingSoon";
import ThankYou from "../screens/ThankYou/ThankYou";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/thanks" component={ThankYou} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
