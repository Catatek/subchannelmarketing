import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Index from "../screens/Index/Index";
import ComingSoon from "../screens/ComingSoon/ComingSoon";
import BetaForm from "../screens/BetaForm";
import Team from "../screens/Team";
import Media from "../screens/Media";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Index onEnter={window.scrollTo(0, 0)} />;
              }}
            />
            <Route exact path="/form" component={BetaForm} />
            <Route
              exact
              path="/team"
              render={() => {
                return <Team onEnter={window.scrollTo(0, 0)} />;
              }}
            />
            <Route
              exact
              path="/media"
              render={() => {
                return <Media onEnter={window.scrollTo(0, 0)} />;
              }}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
