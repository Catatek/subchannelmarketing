import React from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.svg";
import { Title3, Row } from "../theme/theme.js";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "../shared/Burger";

const Img = styled.img`
  width: 51px;
  height: 51px;
  margin: 0 1.25em;
  border-right: 1.5px solid #aaa;
  padding-right: 1.25em;
  @media (max-width: 500px) {
  }
`;

const Wrapper = styled.section`
  height: 75px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: static;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderRow = styled(Row)`
  flex-direction: row;
  align-items: center;
`;

export default function InternalHeader({ children, ...props }) {
  const mobile = window.matchMedia("(max-width: 720px)");

  let handleChange = () => {};

  mobile.addListener(handleChange());

  return (
    <Wrapper>
      <StyledNav>
        <HeaderRow>
          <Link to="/">
            <Img src={Icon} alt="Subchannel Logo" />
          </Link>
          <Title3 fontWeight="300" margin="0 .5em .2em 0" marginmobile="0">
            {props.pagetitle}
          </Title3>
        </HeaderRow>
        {mobile.matches ? (
          <Hamburger />
        ) : (
          <HeaderRow margin="0 3em 0 0">
            <NavLink to="/media">
              <Title3 hover fontSize="1em" fontWeight="300" margin="0 .5em">
                Media
              </Title3>
            </NavLink>
            <NavLink to="/team">
              <Title3 hover fontSize="1em" fontWeight="300" margin="0 .5em">
                Team
              </Title3>
            </NavLink>
            <NavLink to="/jobs">
              <Title3 hover fontSize="1em" fontWeight="300" margin="0 .5em">
                Jobs
              </Title3>
            </NavLink>
          </HeaderRow>
        )}
      </StyledNav>
    </Wrapper>
  );
}
