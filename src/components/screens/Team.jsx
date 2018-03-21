import React, { Component } from "react";
import styled from "styled-components";
import { Column, Row, Title3, Text } from "../theme/theme";
import TeamBg from "../../assets/mediaSplash.jpg";
import InternalHeader from "../shared/InternalHeader";
import InternalBottomNav from "../shared/InternalBottomNav";
import Footer from "../shared/Footer/Footer";
import Will from "../../assets/will.png";
import Raj from "../../assets/raj.png";
import J from "../../assets/J.png";
import Jet from "../../assets/jet.png";

const TeamWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4em 0;
`;

const TeamSplash = styled.div`
  width: 100%;
  height: calc(100vh - 135px);
  background: url(${TeamBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TeamAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6em 0;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

const circle = {
  width: "200px",
  height: "200px",
  borderRadius: "100%",
  color: "#ccc"
};

const titles = {
  one: "Blog",
  two: "Media",
  three: "Jobs"
};

function TeamCard(props) {
  return (
    <Column alignitems="center">
      <StyledImg src={props.img} alt="Subchannel Team Photo" />
      <Title3 margin=".8em 0">{props.name}</Title3>
      <Title3 fontWeight="300" margin="0">
        {props.title}
      </Title3>
    </Column>
  );
}

class Team extends Component {
  render() {
    return (
      <div>
        <InternalHeader pagetitle="subchannel Team" />
        <TeamSplash />
        <TeamAbout>
          <Column width="45%">
            <Text lineheight="1.8em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Column>
        </TeamAbout>
        <TeamWrapper>
          <Title3 margin="3em 0 1em 4em">Meet the team</Title3>
          <Row margin="3em 0" alignitems="center" justifycontent="space-evenly">
            <TeamCard
              img={Will}
              name="William Whatley"
              title="CEO | Co-Founder"
            />
            <TeamCard
              img={Jet}
              name="Getro Jean-Claude"
              title="COO | Co-Founder"
            />
            <TeamCard img={Raj} name="Raj Vanteddu" title="CTO | Co-Founder" />
            <TeamCard img={J} name="J Brian Miles" title="CINO | Co-Founder" />
          </Row>
          {/* <Row margin="3em 0" alignitems="center" justifycontent="space-evenly">
            <TeamCard name="Rachel Adams" title="Designer" />

            <TeamCard name="Taylor Cox" title="Designer" />
            <TeamCard
              style={circle}
              name="Adam Recvlohe"
              title="Software Engineer"
            />
            <TeamCard name="Surendra Vanteddu" title="Software Engineer" />
          </Row> */}
        </TeamWrapper>
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

export default Team;
