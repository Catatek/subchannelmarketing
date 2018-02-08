import React from "react";
import styled from "styled-components";
import { Title2, Row, Column, Text } from "../../theme/theme.js";

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
    <Title2 fontWeight="600">
      The Ubiquitous Broadcasting<br /> Solution of the Future...
    </Title2>
    <Row justifycontent="space-evenly" width="100%" margin="3em 0">
      <Column alignitems="center">
        <div style={circle} />
        <Text width="60%" lineheight="1.6em">
          Upload and organize content in minutes for 24/7 playback automation.
        </Text>
      </Column>
      <Column alignitems="center">
        <div style={circle} />
        <Text width="60%" lineheight="1.6em">
          Manage your distribution with easy-to-use web-based applications.
        </Text>
      </Column>
      <Column alignitems="center">
        <div style={circle} />
        <Text width="60%" lineheight="1.6em">
          Earn and track revenue from Subscribers and Advertisers.
        </Text>
      </Column>
    </Row>
  </Wrapper>
);

export default About;
