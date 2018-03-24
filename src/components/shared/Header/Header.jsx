import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Title3, Row } from "../../theme/theme.js";
import { NavLink } from "react-router-dom";

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
  justify-content: space-between;
  position: static;
  background: linear-gradient(#fff, #f4fdfd);
`;

const StyledNav = styled.nav`
  display: flex;
`;

export default function Header({ children, ...props }) {
  return (
    <Wrapper>
      <StyledNav>
        <Row alignitems="center">
          <Img src={Logo} alt="Subchannel Logo" />
          <NavLink to="/media">
            <Title3 hover fontSize=".9em" fontWeight="300">
              Media
            </Title3>
          </NavLink>
        </Row>
      </StyledNav>
      <div style={{ marginRight: "1.5em" }}>
        <NavLink to="/form">
          <Title3 hover fontSize="1em" fontWeight="300">
            SIGN IN
          </Title3>
        </NavLink>
      </div>
    </Wrapper>
  );
}
