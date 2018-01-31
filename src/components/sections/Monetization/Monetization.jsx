import React from "react";
import styled, { css } from "styled-components";
import { Row, Column, Title1, Text } from "../../theme/theme";
import monetization from "../../../assets/monetization-img.png";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f4f4;
`;

const circle = {
  margin: "50px 0 0 0",
  width: "400px",
  height: "350px",
  backgroundColor: "#ccc"
};

const Monetization = () => (
  <Wrapper>
    <Column width="40%">
      <Title1>MONETIZATION</Title1>
      <Text lineheight="1.8em">
        A key component of our application is providing licensees the ability to
        earn money directly from your subscribers. We give you the option to set
        the price and the terms for your channel so that you can continue
        creating content that viewers want to see.
      </Text>
    </Column>
    <img src={monetization} style={circle} />
  </Wrapper>
);

export default Monetization;
