import React from "react";
import styled from "styled-components";
import { Text, Row, NavBar } from "../theme/theme";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`;

const StyledNav = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 300;
  margin: 0 1em;
`;

export default function BottomNav() {
  return (
    <Wrapper>
      <nav>
        <StyledNav to="/">MEDIA</StyledNav>
        <StyledNav to="/team">TEAM</StyledNav>
        <StyledNav to="/">CONTACT</StyledNav>
      </nav>
    </Wrapper>
  );
}
