import React from "react";
import styled from "styled-components";
import Background from "../../../assets/background.svg";
import Logo from "../../../assets/subchannelLogoDark.svg";
import LogoIcon from "../../../assets/subchannelIcon.svg";
import SubscriberForm from "../../shared/SubscriberForm";
import { Title1, Title2 } from "../../theme/theme.js";
import { Link } from "react-router-dom";

const imgStyle = {
  width: "265px",
  height: "55px",
  margin: ".8em"
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
  width: 45%;
  text-align: center;
  z-index: 100;
  margin-bottom: 8em;
  @media (min-width: 1400px) {
    width: 30%;
  }
  @media (max-width: 880px) {
    width: 90%;
    margin-bottom: 4em;
    margin-top: 2.6em;
  }
  @media (max-width: 500px) {
    width: 95%;
    margin-bottom: 3.5em;
  }
  animation: 4s spin 1;

  @keyframes spin {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  z-index: 100;
`;

const Img = styled.img`
  width: 250px;
  height: 51px;
  margin: 1em 1.5em;
  @media (max-width: 720px) {
    display: none;
  }
`;

export default function ComingSoon() {
  return (
    <Wrapper>
      <Tint />
      <Header>
        <Link to="/">
          <Img src={Logo} alt="Subchannel Logo" />
        </Link>
      </Header>
      <Information>
        <img src={LogoIcon} alt="Subchannel Icon" />
        <Title1>We're coming soon!</Title1>
        <Title2 lineheight="1.6em">
          Help us make a better product so that you can turn your content into
          your business. Fill our the form below and we'll give you{" "}
          <span style={{ fontWeight: "600" }}>3 months free</span> of our
          Starter plan!
        </Title2>
      </Information>
    </Wrapper>
  );
}
