import React from "react";
import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
import Monetize from "../../../assets/monetization.svg";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(#ffffff, #f7f7f7);
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 110vh;
    justify-content: center;
  }
`;

const ImgStyle = {
  width: "400px",
  height: "331px"
};

const Monetization = () => (
  <Wrapper>
    <Column width="40%" marginmobile="1em 0">
      <Title1>MONETIZATION</Title1>
      <Text lineheight="2.2em" lineheightmobile="2em" widthmobile="80%">
        A key component of our application is providing licensees the ability to
        earn money directly from your subscribers. We give you the option to set
        the price and the terms for your channel so that you can continue
        creating content that viewers want to see.
      </Text>
    </Column>
    <img
      src={Monetize}
      style={ImgStyle}
      alt="Subchannel Monetization Illustration"
    />
  </Wrapper>
);

export default Monetization;
