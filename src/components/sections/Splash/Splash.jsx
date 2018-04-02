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
  width: 98%;
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
  height: 45%;
  margin: 4em 0 0 0;
  min-width: 452px;
  @media screen and (max-width: 900px) {
    width: 96%;
    min-width: 0;
    height: 50%;
  }
`;

const StyledRow = styled(Row)`
  flex-direction: row;
`;

const Input = styled.input`
  height: 42px;
  width: 185px;
  font-family: "Montserrat", sans-serif;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-right: none;
  z-index: 100000;
  outline: none;
  padding: 0 0.5em;
  border-radius: 5px 0 0 5px;
  color: #4d4d4d;
  &:focus {
    border-top: 1px solid #dd694a;
    border-left: 1px solid #dd694a;
    border-bottom: 1px solid #dd694a;
  }
`;

const Button = styled.button`
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  outline: none;
  z-index: 100000;
  background-color: #dd694a;
  color: #fff;
  height: 42x;
  width: 115px;
  padding: 0 0.5em;
  border: 1px solid transparent;
  border: none;
  border-radius: 0 5px 5px 0;
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
          <StyledRow>
            <Input placeholder="Enter your email" />
            <Button>Get Started</Button>
          </StyledRow>
          <Img src={HeaderBg} alt="Subchannel Splash" />
          <MobileImg src={MobileHeaderBg} alt="Subchannel Splash" />
        </StyledColumn>
      </Wrapper>
    );
  }
}
