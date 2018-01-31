import React, { Component } from "react";
import Header from "../../shared/Header/Header";
import Splash from "../../sections/Splash/Splash";
import About from "../../sections/About/About";
import LiveBroadcast from "../../sections/LiveBroadcast/LiveBroadcast";
import AdvancedAnalytics from "../../sections/AdvancedAnalytics/AdvancedAnalytics";
import Features from "../../sections/Features/Features";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
        <About />
        <LiveBroadcast />
        <AdvancedAnalytics />
        <Features />
      </div>
    );
  }
}

export default Index;
