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

const Wrapper = styled.section`
  height: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Splash = ({ children }) => (
  <Wrapper>
    <Column
      width="40%"
      alignitems="center"
      textalign="center"
      justifycontent="space-around"
      height="60%"
      margin="0 0 3em 0"
    >
      <Title1 margin=".5em 0 0 0">
        Distribute subscription-based content to any platform.
      </Title1>
      <Title2 lineheight="1.6em">
        We give you the tools to share your content, so you can earn revenue and
        keep creating
      </Title2>
      <SignupButton primary>START YOUR TRIAL</SignupButton>
      <img
        src={HeaderBg}
        style={{
          width: "90%",

          position: "absolute",
          top: "23em",
          zIndex: "-1"
        }}
        alt="Subchannel Splash"
      />
    </Column>
  </Wrapper>
);

export default Splash;
