import React from "react";
import styled from "styled-components";
import Background from "../../../assets/background.svg";
import Logo from "../../../assets/subchannelLogoDark.svg";
import LogoIcon from "../../../assets/subchannelIcon.svg";
import { Title1, Title2, Title3, Button, Text } from "../../theme/theme.js";

const imgStyle = {
  width: "265px",
  height: "55px",
  margin: ".8em"
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${Background});
  background-size: cover;
`;

const Tint = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 50;
`;

const Information = styled.div`
  width: 550px;
  text-align: center;
  z-index: 100;
  margin-bottom: 8em;
`;

const Header = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0;
`;

const Input = styled.input`
  margin: 0.5em;
  padding: 0.2em;
  height: 36px;
  width: 250px;
  background-color: #f6f6f6;
  color: #656565;
  cursor: text;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: "Raleway", sans-serif;
  font-size: 0.9em;
  padding: 0em 1em;
  outline: none;
  &:focus {
    border: 1px solid ${props => props.theme.primary};
  }
  z-index: 10000;
`;

export default function ComingSoon() {
  return (
    <Wrapper>
      <Tint />
      <Header>
        <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
      </Header>
      <Information>
        <img src={LogoIcon} alt="Subchannel Icon" />
        <Title1>Distribute subscription-based content to any platform.</Title1>
        <Title2 lineheight="1.6em">
          We're coming soon, signup below and we will let you know when we
          launch!
        </Title2>
        <Input placeholder="Signup with your email address" />
        <Button primary>Join</Button>
      </Information>
    </Wrapper>
  );
}
