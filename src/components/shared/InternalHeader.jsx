import React from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.svg";
import { Title3, Row } from "../theme/theme.js";
import { NavLink, Link } from "react-router-dom";

const Img = styled.img`
  width: 51px;
  height: 51px;
  margin: 0 1.7em;
  border-right: 1.5px solid #aaa;
  padding-right: 0.8em;
`;

const Wrapper = styled.section`
  height: 75px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

const StyledNav = styled.nav`
  display: flex;
`;

export default function InternalHeader({ children, ...props }) {
  return (
    <Wrapper>
      <StyledNav>
        <Row alignitems="center">
          <Link to="/">
            <Img src={Icon} alt="Subchannel Logo" />
          </Link>
          <Title3 fontSize="1.2em" fontWeight="300" margin="0 .5em 0 0">
            {props.pagetitle}
          </Title3>
        </Row>
      </StyledNav>
      <Row margin="0 3em 0 0" alignitems="center">
        <NavLink to="/media">
          <Title3 hover fontSize="1em" fontWeight="300" margin="0 .5em">
            Media
          </Title3>
        </NavLink>
        <NavLink to="/team" activeClassName="activeClass">
          <Title3 hover fontSize="1em" fontWeight="300" margin="0 .5em">
            Team
          </Title3>
        </NavLink>
        <NavLink to="/">
          <Title3 hover fontSize="1em" fontWeight="300" margin="0 .5em">
            Jobs
          </Title3>
        </NavLink>
      </Row>
    </Wrapper>
  );
}
