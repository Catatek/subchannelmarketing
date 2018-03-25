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
  background: linear-gradient(#fff, #f4fdfd);
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

export default function Header({ children, ...props }) {
  const mobile = window.matchMedia("(max-width: 720px)");
  return (
    <Wrapper>
      <StyledNav>
        <Img src={Logo} alt="Subchannel Logo" />
        {mobile.matches ? (
          <Hamburger />
        ) : (
          <Row justifycontent="space-between" width="100%">
            <NavLink to="/media">
              <Title3 hover fontSize=".9em" fontWeight="300">
                Media
              </Title3>
            </NavLink>

            <div style={{ marginRight: "1.5em" }}>
              <NavLink to="/form">
                <Title3 hover fontSize="1em" fontWeight="300">
                  SIGN IN
                </Title3>
              </NavLink>
            </div>
          </Row>
        )}
      </StyledNav>
    </Wrapper>
  );
}
