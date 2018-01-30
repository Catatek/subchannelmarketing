import React from "react";
import styled from "styled-components";
import { Title2, Title3, Row, Column, Text } from "../../theme/theme.js";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 1px solid #ccc;
  padding: 1em 0;
`;

const circle = {
  width: "275px",
  height: "275px",
  borderRadius: "100%",
  backgroundColor: "#ccc",
  marginBottom: "1em"
};

const About = () => (
  <Wrapper>
    <Title2>Broadcast your content on all platforms and devices</Title2>
    <Row justifycontent="space-evenly" width="100%" margin="3em 0">
      <Column alignitems="center">
        <div style={circle} />
        <Text width="60%" lineheight="1.6em">
          Broadcast your content on all platforms and devices
        </Text>
      </Column>
      <Column alignitems="center">
        <div style={circle} />
        <Text width="60%" lineheight="1.6em">
          Broadcast your content on all platforms and devices
        </Text>
      </Column>
      <Column alignitems="center">
        <div style={circle} />
        <Text width="60%" lineheight="1.6em">
          Broadcast your content on all platforms and devices
        </Text>
      </Column>
    </Row>
  </Wrapper>
);

export default About;
