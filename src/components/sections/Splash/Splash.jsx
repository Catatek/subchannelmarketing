import React from "react";
import styled from "styled-components";
import {
  Title1,
  Title2,
  Title3,
  Column,
  Row,
  SignupButton
} from "../../theme/theme.js";
import HeaderBg from "../../../assets/headerBg.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#ffffff, #f7f7f7);
  margin: 1em 0;
`;

const Img = styled.img`
  width: 90%;
  position: absolute;
  bottom: 1em;
  zindex: 1;
`;

const StyledColumn = styled(Column)`
  width: 40%;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 60%;
  margin: 0 0 3em 0;
  @media screen and (max-width: 900px) {
    width: 98%;
    height: 58%;
  }
`;

const Splash = ({ children }) => (
  <Wrapper>
    <StyledColumn>
      <Title1 margin=".5em 0 0 0">
        Distribute subscription-based content to any platform.
      </Title1>
      <Title2 lineheight="1.4em">
        We give you the tools to share your content, so you can earn revenue and
        keep creating
      </Title2>
      <SignupButton primary>
        <Link to="/form">START YOUR TRIAL</Link>
      </SignupButton>
      <Img src={HeaderBg} alt="Subchannel Splash" />
    </StyledColumn>
  </Wrapper>
);

export default Splash;
