import React from "react";
import styled from "styled-components";
import {
  Column,
  Row,
  Text,
  Title1,
  Title2,
  Title3
} from "../../theme/theme.js";

const circle = {
  width: "125px",
  height: "125px",
  borderRadius: "100%",
  backgroundColor: "#ccc",
  marginRight: "1em"
};

const Wrapper = styled.section`
  height: 100&;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Features = () => (
  <Wrapper>
    <Title1>Features</Title1>
    <Row justifycontent="space-around" width="100%" margin="4em auto">
      <Column width="40%">
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>Content Management System (CMS)</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>Branded Applications</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>Second Screen Engagement</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>High Security & Monitoring</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
      </Column>
      <Column width="40%">
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>24/7 Technical Account Manager</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>On-site Training & Migration</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>Ad Bank Tool</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <div style={circle} />
          <Column width="55%">
            <Title3>Timeline Tool</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
      </Column>
    </Row>
  </Wrapper>
);

export default Features;
