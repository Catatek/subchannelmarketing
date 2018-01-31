import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoLight.svg";

const Wrapper = styled.section`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #484c4c;
`;

const imgStyle = {
  width: "150px",
  height: "31px",
  marginLeft: "1.5em"
};

const Footer = () => (
  <Wrapper>
    <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
  </Wrapper>
);

export default Footer;
