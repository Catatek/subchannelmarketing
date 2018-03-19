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
import Plans from "../../sections/Plans/Plans";
import BottomNav from "../../shared/BottomNav";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
        <About />
        <LiveBroadcast />
        <AdvancedAnalytics />
        <Monetization />
        <DragDropAdvertising />
        <Features />
        <How />
        <Plans />
        <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Index;
