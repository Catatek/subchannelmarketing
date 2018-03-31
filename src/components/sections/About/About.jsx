import React, { Component } from "react";
import styled from "styled-components";
import {
  Title1,
  Title2,
  Title3,
  Row,
  Column,
  Text
} from "../../theme/theme.js";
import Upload from "../../../assets/upload.svg";
import Distribute from "../../../assets/distribute.svg";
import Monetize from "../../../assets/monetize.svg";
import Analyze from "../../../assets/analytics.svg";
import Slider from "react-slick";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(#ffffff, #f7f7f7 85%);
  padding: 0.5em 0;
  margin: 1em 0;
  height: 100%;
`;

const IconsImg = styled.img`
  width: 85px;
  height: 85px;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const StyledColumn = styled(Column)`
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
`;

class About extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeClass: "activeClass"
  //   };
  //   this.listenScrollEvent = this.listenScrollEvent.bind(this);
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // }

  // listenScrollEvent() {
  //   this.setState({
  //     activeClass: "inactiveClass"
  //   });
  // }

  render() {
    let settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 1000
    };

    const mobile = window.matchMedia("(max-width: 720px)");

    return (
      <div>
        {mobile.matches ? (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <div style={{ textAlign: "center" }}>
                <IconsImg src={Upload} alt="Subchannel Upload" />
                <Title3
                  textalign="center"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  UPLOAD
                </Title3>
                <Text lineheight="1.4em">
                  Upload and organize<br /> contentin minutes for <br />24/7
                  playback automation.
                </Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <IconsImg src={Distribute} alt="Subchannel Upload" />
                <Title3
                  textalign="center"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  DISTRIBUTE
                </Title3>
                <Text lineheight="1.6em">
                  Manage your distribution<br /> with easy-to-use <br />web-based
                  applications.
                </Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <IconsImg src={Monetize} alt="Subchannel Upload" />
                <Title3
                  textalign="center"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  MONETIZE
                </Title3>
                <Text lineheight="1.6em">
                  Earn and track revenue<br /> from Subscribers <br />and
                  Advertisers.
                </Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <IconsImg src={Analyze} alt="Subchannel Upload" />
                <Title3
                  textalign="center"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  ANALYZE
                </Title3>
                <Text lineheight="1.6em">
                  Advanced analytics that <br /> creates new engagement and<br />{" "}
                  gain actionable insights.
                </Text>
              </div>
            </Slider>
          </div>
        ) : (
          <Wrapper>
            <Row justifycontent="space-evenly" width="100%" margin=" 0">
              <StyledColumn alignitems="center" margin="1em 0">
                <IconsImg src={Upload} alt="Subchannel Upload" />
                <Title3
                  margin=".6em 0"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  UPLOAD
                </Title3>
                <Text width="80%" lineheight="1.4em">
                  Upload and organize content in minutes for 24/7 playback
                  automation.
                </Text>
              </StyledColumn>
              <StyledColumn alignitems="center" margin="1em 0">
                <IconsImg src={Distribute} alt="Subchannel Upload" />
                <Title3
                  margin=".6em 0"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  DISTRIBUTE
                </Title3>
                <Text width="80%" lineheight="1.6em">
                  Manage your distribution with easy-to-use web-based
                  applications.
                </Text>
              </StyledColumn>
              <StyledColumn alignitems="center" margin="1em 0">
                <IconsImg src={Monetize} alt="Subchannel Upload" />
                <Title3
                  margin=".6em 0"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  MONETIZE
                </Title3>
                <Text width="80%" lineheight="1.6em">
                  Earn and track revenue from Subscribers and Advertisers.
                </Text>
              </StyledColumn>
              <StyledColumn alignitems="center" margin="1em 0">
                <IconsImg src={Analyze} alt="Subchannel Upload" />
                <Title3
                  margin=".6em 0"
                  fontSize="1.4em"
                  marginmobile="2em 0 0 0"
                >
                  ANALYZE
                </Title3>
                <Text width="80%" lineheight="1.6em">
                  Advanced analytics that creates new engagement and gain
                  actionable insights.
                </Text>
              </StyledColumn>
            </Row>
          </Wrapper>
        )}
      </div>
    );
  }
}
export default About;
