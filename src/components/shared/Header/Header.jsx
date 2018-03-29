import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Title3, Row } from "../../theme/theme.js";
import { NavLink } from "react-router-dom";
import Hamburger from "../Burger";

const Img = styled.img`
  width: 250px;
  height: 51px;
  margin: 0 1.5em;
`;

const Wrapper = styled.section`
  height: 75px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: static;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 300;
  margin: 0 0.8em;
  &:hover {
    color: #f4bc4a;
  }
`;

export default function Header({ children, ...props }) {
  const mobile = window.matchMedia("(max-width: 720px)");
  return (
    <Wrapper>
      <StyledNav>
        <Img src={Logo} alt="Subchannel Logo" />
        {mobile.matches ? (
          <Hamburger />
        ) : (
          <Row justifycontent="flex-end" width="100%">
            <div style={{ marginRight: "1.5em" }}>
              <StyledNavLink to="/media">Media</StyledNavLink>
              <StyledNavLink to="/team">Team</StyledNavLink>
              <StyledNavLink to="/jobs">Jobs</StyledNavLink>
              <StyledNavLink to="/support">Support</StyledNavLink>
            </div>
          </Row>
        )}
      </StyledNav>
    </Wrapper>
  );
}
