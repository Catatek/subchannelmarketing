import React from "react";
import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
import Analytics from "../../../assets/advancedAnalytics.svg";

const Wrapper = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(#ffffff, #f7f7f7);
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 120vh;
    justify-content: center;
  }
`;

const ImgStyle = styled.img`
  width: 350px;
  height: 379px;
  @media (max-width: 500px) {
    width: 350px;
    height: 350px;
  }
`;

const AdvancedAnalytics = () => (
  <Wrapper>
    <ImgStyle src={Analytics} alt="Subchannel Analytics Illustration" />
    <Column width="40%" margin="3em 0 0 0" marginmobile="1em 0">
      <Title1>ADVANCED ANALYTICS</Title1>
      <Text lineheight="2.2em" lineheightmobile="2em" widthmobile="80%">
        Discover and interpret vital viewing data from your subscribers. In a
        time where numbers speak volumes, our analytics will give you the tools
        to close deals with potential and existing advertising partners.
      </Text>
    </Column>
  </Wrapper>
);

export default AdvancedAnalytics;
