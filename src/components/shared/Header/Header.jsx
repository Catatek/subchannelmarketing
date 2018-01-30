import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/subchannelLogo.png";
import { Title2, Title3 } from "../../theme/theme.js";

const user = {
  name: "Will",
  avatar: ""
};

const imgStyle = {
  width: "200px",
  height: "41px",
  marginLeft: "1.5em"
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
    <img src={Logo} style={imgStyle} alt="Subchannel Logo" />
    <div style={{ marginRight: "1.5em" }}>
      <Title3 fontSize="1em">Log In</Title3>
    </div>
  </Wrapper>
);

export default Header;
