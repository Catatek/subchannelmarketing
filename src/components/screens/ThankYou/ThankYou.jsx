import React from "react";
import styled from "styled-components";
import Background from "../../../assets/background.svg";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Title1, Title2 } from "../../theme/theme.js";

const Header = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0;
`;

const imgStyle = {
  width: "265px",
  height: "55px",
  margin: ".8em"
};

const textAlign = {
  textAlign: "center"
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${Background});
  background-size: cover;
`;

export default function ThankYou() {
  return (
    <Wrapper>
      <Header>
        <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
      </Header>
      <div style={textAlign}>
        <Title1>Thank you!</Title1>
        <Title2>We'll send you updates with our progress!</Title2>
      </div>
    </Wrapper>
  );
}
