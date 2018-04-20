import React, { Component } from "react";
import styled from "styled-components";
import { Column, Row, Title3, Text } from "../theme/theme";
import TeamBg from "../../assets/teamSplash.jpg";
import InternalHeader from "../shared/InternalHeader";
import InternalBottomNav from "../shared/InternalBottomNav";
import Footer from "../shared/Footer/Footer";
import Will from "../../assets/will.png";
import Raj from "../../assets/raj.png";
import J from "../../assets/J.png";
import Jet from "../../assets/jet.png";
import Shenole from "../../assets/shenole02.png";
import Rachel from "../../assets/rachel.png";
import Surendra from "../../assets/surendra.png";

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

const titles = {
  one: "Blog",
  two: "Media",
  three: "Jobs"
};

function TeamCard({ margin, img, name, title }) {
  return (
    <Column alignitems="center" marginmobile="1.5em 0" margin={margin}>
      <StyledImg src={img} alt="Subchannel Team Photo" />
      <Title3 margin=".8em 0" marginmobile="1em 0">
        {name}
      </Title3>
      <Title3 fontWeight="300" margin="0">
        {title}
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
          <Column width="50%">
            <Text lineheight="1.8em" widthmobile="80%">
              Founded in 2017, Subchannel provides solutions to content creators
              so that they can turn their content into their business. We
              believe that the creators’ voices should never be filtered, which
              is why we designed our entire company around our customers first.
              Our team is a group of passionate, thrill-seeking adventurers
              united and on a mission of continued personal growth and
              self-development.
            </Text>
          </Column>
        </TeamAbout>
        <TeamWrapper>
          <Title3 margin="3em 0 1em 4em" marginmobile="2em auto">
            Meet the team
          </Title3>
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
          <Row margin="3em 0" alignitems="center">
            <TeamCard
              img={Shenole}
              name="Shenole Latimer"
              title="Developer"
              margin="0 0 0 6em"
            />
            <TeamCard
              margin="0 0 0 6em"
              img={Rachel}
              name="Rachel Adams"
              title="Designer | Illustrator"
            />
            {/* <TeamCard
              img={Surendra}
              name="Surendra Vanteddu"
              title="Developer"
            /> */}
          </Row>
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
