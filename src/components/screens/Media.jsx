import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../shared/Footer/Footer";
import InternalHeader from "../shared/InternalHeader";
import InternalBottomNav from "../shared/InternalBottomNav";
import MediaBg from "../../assets/mediaSplash.jpg";
import { Row, Column, Title3 } from "../theme/theme";

const MediaWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4em 0;
`;

const MediaSplash = styled.div`
  width: 100%;
  height: calc(100vh - 135px);
  background: url(${MediaBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const MediaAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6em 0;
`;

const titles = {
  one: "Blog",
  two: "Media",
  three: "Jobs"
};

class Media extends Component {
  render() {
    return (
      <div>
        <InternalHeader pagetitle="subchannel Media" />
        <MediaSplash />
        <MediaWrapper>
          <Title3 margin="3em 0 1em 4em">Latest in the newsroom</Title3>
          <Row />
        </MediaWrapper>
        <InternalBottomNav
          titleone={titles.one}
          titletwo={titles.two}
          titlethree={titles.three}
        />
        <Footer />
      </div>
    );
  }
}

export default Media;