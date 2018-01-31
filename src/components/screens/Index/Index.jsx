import React, { Component } from "react";
import Header from "../../shared/Header/Header";
import Splash from "../../sections/Splash/Splash";
import About from "../../sections/About/About";
import LiveBroadcast from "../../sections/LiveBroadcast/LiveBroadcast";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
        <About />
        <LiveBroadcast />
      </div>
    );
  }
}

export default Index;
