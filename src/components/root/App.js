import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "../screens/Index/Index";
import ComingSoon from "../screens/ComingSoon/ComingSoon";
import BetaForm from "../screens/BetaForm";
import Team from "../screens/Team";
import Media from "../screens/Media";
import Construction from "../screens/Construction";

class App extends Component {
  componentDidMount() {
    setTimeout(
      () =>
        window.Intercom("boot", {
          app_id: "xu9tvnc7",
          hide_default_launcher: false
        }),
      5000
    );
    window.Intercom("update");
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
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
            <Route
              exact
              path="/jobs"
              render={() => {
                return <Redirect to="/construction" />;
              }}
            />
            <Route
              exact
              path="/support"
              render={() => {
                return <Redirect to="/construction" />;
              }}
            />
            <Route
              exact
              path="/construction"
              render={() => {
                return <Construction onEnter={window.scrollTo(0, 0)} />;
              }}
            />
            <Route
              exact
              path="/comingsoon"
              render={() => {
                return <ComingSoon onEnter={window.scrollTo(0, 0)} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
