import React from "react";
import styled from "styled-components";
import {
  Title1,
  Title2,
  Title3,
  Column,
  SignupButton
} from "../../theme/theme.js";

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom-border: 10px solid #ccc;
`;

const Splash = ({ children }) => (
  <Wrapper>
    <Column
      width="40%"
      alignitems="center"
      textalign="center"
      justifycontent="space-around"
      height="50%"
      margin="2em 0 0 0"
    >
      <Title1>Distribute subscription-based content to any platform.</Title1>
      <Title2 lineheight="1.6em">
        We give you the tools to share your content, so you can earn revenue and
        keep creating
      </Title2>
      <SignupButton primary>START YOUR TRIAL</SignupButton>
    </Column>
  </Wrapper>
);

export default Splash;
