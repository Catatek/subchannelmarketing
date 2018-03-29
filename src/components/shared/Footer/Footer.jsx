import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Link, NavLink } from "react-router-dom";
import { Row } from "../../theme/theme";

const Wrapper = styled.section`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const imgStyle = {
  width: "200px",
  height: "41px",
  margin: "0 1.5em"
};

const StyledNav = styled(NavLink)`
  font-weight: 300;
  margin: 0 0.8em;
  @media (max-width: 720px) {
    display: none;
  }
`;

const Footer = () => (
  <Wrapper>
    <Row alignitems="center">
      <Link to="/">
        <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
      </Link>
      <p style={{ margin: ".2em 1.5em" }}> &copy; 2018 </p>
    </Row>
    <Row alignitems="center" margin="0 5em 0 0">
      <nav>
        <StyledNav to="/media">Media</StyledNav>
        <StyledNav to="/team">Team</StyledNav>
        <StyledNav to="/jobs">Jobs</StyledNav>
        <StyledNav to="/support">Support</StyledNav>
      </nav>
    </Row>
  </Wrapper>
);

export default Footer;
