import React, { Component } from "react";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import Splash from "../../sections/Splash/Splash";
import About from "../../sections/About/About";
import LiveBroadcast from "../../sections/LiveBroadcast/LiveBroadcast";
import AdvancedAnalytics from "../../sections/AdvancedAnalytics/AdvancedAnalytics";
import Monetization from "../../sections/Monetization/Monetization";
import DragDropAdvertising from "../../sections/DragDropAdvertising/DragDropAdvertising";
import Features from "../../sections/Features/Features";
import How from "../../sections/How";
// import Plans from "../../sections/Plans/Plans";
import { withRouter } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash history={this.props.history} />
        <About />
        <LiveBroadcast />
        <AdvancedAnalytics />
        <Monetization />
        <DragDropAdvertising />
        <Features />
        <How />

        <Footer />
      </div>
    );
  }
}

export default withRouter(Index);
