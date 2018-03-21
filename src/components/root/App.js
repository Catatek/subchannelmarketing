import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../screens/Index/Index";
import ComingSoon from "../screens/ComingSoon/ComingSoon";
import BetaForm from "../screens/BetaForm";
import Team from "../screens/Team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/form" component={BetaForm} />
            <Route exact path="/team" component={Team} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
