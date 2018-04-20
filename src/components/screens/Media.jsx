import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../shared/Footer/Footer";
import InternalHeader from "../shared/InternalHeader";
import InternalBottomNav from "../shared/InternalBottomNav";
import MediaBg from "../../assets/mediaSplash.jpg";
import { Row, Column, Title3, Text } from "../theme/theme";

const MediaWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4em 0;
  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

const MediaSplash = styled.div`
  width: 100%;
  height: calc(100vh - 135px);
  background: url(${MediaBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const MediaContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0.5em;
  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;

const titles = {
  one: "Blog",
  two: "Media",
  three: "Jobs"
};

const StyledColumn = styled(Column)`
  visibility: ${props => props.hidden && "hidden"};
`;

function Video({ videosrc, cssclass, title, date, author, hidden }) {
  return (
    <StyledColumn hidden={hidden}>
      <iframe
        className={cssclass}
        src={videosrc}
        width="475"
        height="267"
        frameBorder="0"
        webkitallowfullscreen="true"
        allowFullScreen
        title={"Subchannel Video"}
      />
      <Title3 margin=".5em 0">{title}</Title3>
      <Row>
        <Text>
          {date}
          <span style={{ color: "#019095" }}>{author}</span>
        </Text>
      </Row>
    </StyledColumn>
  );
}

class Media extends Component {
  render() {
    return (
      <div>
        <InternalHeader pagetitle="subchannel Media" />
        <MediaSplash />
        <MediaWrapper>
          <Title3 margin="3em 0 1em 4em" marginmobile="4em 0 0 0">
            Latest in the newsroom
          </Title3>
          <Row justifycontent="space-evenly" alignitems="center" margin="3em 0">
            <Video
              videosrc={
                "https://player.vimeo.com/video/265258052?title=0&byline=0&portrait=0"
              }
              title={"Meet the Founders: J"}
              date={"April 19, 2018 / "}
              author={"Getro Jean-Claude"}
              cssclass={"video"}
            />
            <Video
              videosrc={"https://player.vimeo.com/video/265448665"}
              title={"Meet the Founders: Will"}
              date={"April 19, 2018 / "}
              author={"Getro Jean-Claude"}
              cssclass={"video"}
            />
          </Row>
          <Row justifycontent="space-evenly" alignitems="center" margin="3em 0">
            <Video
              videosrc={
                "https://player.vimeo.com/video/265677518?title=0&byline=0&portrait=0"
              }
              title={"NAB Show 2018 - Las Vegas"}
              date={"April 20, 2018 / "}
              author={"Getro Jean-Claude"}
              cssclass={"video"}
            />
            <Video
              videosrc={
                "https://player.vimeo.com/video/265677518?title=0&byline=0&portrait=0"
              }
              title={"NAB Show 2018 - Las Vegas"}
              date={"April 20, 2018 / "}
              author={"Getro Jean-Claude"}
              cssclass={"video hidden"}
              hidden={true}
            />
          </Row>
        </MediaWrapper>
        <MediaContent />
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
