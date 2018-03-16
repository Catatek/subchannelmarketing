import React from "react";
import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
import Analytics from "../../../assets/advancedAnalytics.svg";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(#ffffff, #f7f7f7);
`;

const ImgStyle = {
  width: "400px",
  height: "434px"
};

const AdvancedAnalytics = () => (
  <Wrapper>
    <img
      src={Analytics}
      style={ImgStyle}
      alt="Subchannel Analytics Illustration"
    />
    <Column width="40%" margin="50px 0 0 0">
      <Title1>ADVANCED ANALYTICS</Title1>
      <Text lineheight="1.8em">
        Discover and interpret vital viewing data from your subscribers. In a
        time where numbers speak volumes, our analytics will give you the tools
        to close deals with potential and existing advertising partners.
      </Text>
    </Column>
  </Wrapper>
);

export default AdvancedAnalytics;
