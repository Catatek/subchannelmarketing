import React from "react";
import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
import advancedanalytics from "../../../assets/advancedanalytics-img.png";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fcfbf5;
`;

const circle = {
  margin: "25px 0 0 0",
  width: "400px",
  height: "350px",
  backgroundColor: "#ccc"
};

const AdvancedAnalytics = () => (
  <Wrapper>
    <img
      src={advancedanalytics}
      style={circle}
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
