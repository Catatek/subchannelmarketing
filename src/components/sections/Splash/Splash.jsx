import React, { Component } from "react";
import styled from "styled-components";
import {
  Title1,
  Title2,
  Title3,
  Column,
  Row,
  SignupButton
} from "../../theme/theme.js";
import HeaderBg from "../../../assets/headerBg1.svg";
import MobileHeaderBg from "../../../assets/mobileHeader.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 90%;
  position: absolute;
  bottom: 1em;
  zindex: 1;
  @media (min-width: 500px) {
    display: block;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileImg = styled.img`
  width: 95%;
  position: absolute;
  bottom: 0.5em;
  zindex: 1;
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const StyledColumn = styled(Column)`
  width: 40%;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 60%;
  margin: 0 0 3em 0;
  @media screen and (max-width: 900px) {
    width: 96%;
    height: 50%;
  }
`;

export default class Splash extends Component {
  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <Title1 margin=".5em 0 0 0">
            Distribute subscription-based content to any platform
          </Title1>
          <Title2 lineheight="1.4em">
            We give you the tools to share your content, so you can earn revenue
            and keep creating
          </Title2>
          <SignupButton primary>
            <Link to="/form">JOIN US</Link>
          </SignupButton>
          <Img src={HeaderBg} alt="Subchannel Splash" />
          <MobileImg src={MobileHeaderBg} alt="Subchannel Splash" />
        </StyledColumn>
      </Wrapper>
    );
  }
}
