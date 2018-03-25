import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const imgStyle = {
  width: "200px",
  height: "41px",
  margin: "0 1.5em"
};

const Footer = () => (
  <Wrapper>
    <Link to="/">
      <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
    </Link>
    <p> &copy; 2018 </p>
  </Wrapper>
);

export default Footer;
