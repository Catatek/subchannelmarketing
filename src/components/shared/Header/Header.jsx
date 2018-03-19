import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogoDark.svg";
import { Title3, Row } from "../../theme/theme.js";
import { NavLink } from "react-router-dom";

// const user = {
//   name: "Will",
//   avatar: ""
// };

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
  background: linear-gradient(#ffffff, #fafafa);
`;

export default function Header({ children, ...props }) {
  return (
    <Wrapper>
      <nav>
        <Row alignitems="center">
          <Img src={Logo} alt="Subchannel Logo" />
          <NavLink to="/">
            <Title3 fontSize=".9em" fontWeight="300">
              Industries
            </Title3>
          </NavLink>
        </Row>
      </nav>
      <div style={{ marginRight: "1.5em" }}>
        <Title3 fontSize="1em" fontWeight="300">
          SIGN IN
        </Title3>
      </div>
    </Wrapper>
  );
}
