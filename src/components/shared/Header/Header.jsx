import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Title2, Title3, Text, Row } from "../../theme/theme.js";
import { Link, NavLink } from "react-router-dom";

const user = {
  name: "Will",
  avatar: ""
};

const imgStyle = {
  width: "200px",
  height: "41px",
  margin: "0 1.5em"
};

const Wrapper = styled.section`
  height: 75px;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 15px #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

const Header = ({ children, props }) => (
  <Wrapper>
    <nav>
      <Row alignitems="center">
        <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
        <NavLink to="/">
          <Title3 fontSize=".9em" fontWeight="300">
            Industries
          </Title3>
        </NavLink>
      </Row>
    </nav>
    <div style={{ marginRight: "1.5em" }}>
      <Title3 fontSize="1em" fontWeight="700">
        Log In
      </Title3>
    </div>
  </Wrapper>
);

export default Header;
