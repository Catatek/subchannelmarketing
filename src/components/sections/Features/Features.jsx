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

import Cms from "../../../assets/cms.svg";
import Branded from "../../../assets/brandedApps.svg";
import Second from "../../../assets/secondScreen.svg";
import Security from "../../../assets/security.svg";
import Manager from "../../../assets/acctManager.svg";
import Training from "../../../assets/training.svg";
import Bank from "../../../assets/adBank.svg";
import Timeline from "../../../assets/timeline.svg";

const IconStyle = styled.img`
  width: 125px;
  height: 125px;
  margin-right: 2.5em;
`;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#ffffff, #f7f7f7);
  margin: 6em 0;
`;

const Features = () => (
  <Wrapper>
    <Title1>FEATURES</Title1>
    <Row justifycontent="space-evenly" width="100%" margin="4em auto">
      <Column width="40%">
        <Row width="100%" margin="3em 0">
          <IconStyle src={Cms} alt="Subchannel CMS Icon" />
          <Column width="55%">
            <Title3>Content Management System (CMS)</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Branded} alt="Subchannel Branded Icon" />
          <Column width="55%">
            <Title3>Branded Applications</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Second} alt="Subchannel Second Screen Icon" />
          <Column width="55%">
            <Title3>Second Screen Engagement</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Security} alt="Subchannel Security Icon" />
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
          <IconStyle src={Manager} alt="Subchannel Manager Icon" />
          <Column width="55%">
            <Title3>24/7 Technical Account Manager</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Training} alt="Subchannel Training Icon" />
          <Column width="55%">
            <Title3>On-site Training & Migration</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Bank} alt="Subchannel Bank Icon" />
          <Column width="55%">
            <Title3>Ad Bank Tool</Title3>
            <Text margin=".8em 0 0 0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Timeline} alt="Subchannel TimeLine Icon" />
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
