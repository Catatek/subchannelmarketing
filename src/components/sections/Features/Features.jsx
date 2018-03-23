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
import Analytics from "../../../assets/analytics.svg";
import Backup from "../../../assets/backups.svg";
import Payout from "../../../assets/payout.svg";
import OnDemand from "../../../assets/onDemand.svg";

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
  margin: 3em 0;
`;

const Features = () => (
  <Wrapper>
    <Title1>FEATURES</Title1>
    <Row justifycontent="space-evenly" width="100%" margin="4em auto">
      <Column width="40%">
        <Row width="100%" margin="3em 0">
          <IconStyle src={Cms} alt="Subchannel CMS Icon" />
          <Column width="55%">
            <Title3>Content Management System</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Upload and Organize your content for broadcast.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Second} alt="Subchannel Second Screen Icon" />
          <Column width="60%">
            <Title3>Second Screen Engagement</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Engage viewers on their mobile devices while they're watching your
              content on TV.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Branded} alt="Subchannel Branded Icon" />
          <Column width="55%">
            <Title3>Branded Applications</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Website and Mobile Applications with your logo and branding.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Payout} alt="Subchannel Payout Icon" />
          <Column width="60%">
            <Title3>Flexible Payout Options</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              You can get paid when you get paid and share the wealth with your
              collaborators.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Security} alt="Subchannel Security Icon" />
          <Column width="55%">
            <Title3>High Security & Monitoring</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Security of your personal information and analytic data is a top
              priority.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Backup} alt="Subchannel Backups Icon" />
          <Column width="55%">
            <Title3>Daily Backups</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              We ensure that your content is backed up and that none of your
              work will be lost.
            </Text>
          </Column>
        </Row>
      </Column>
      <Column width="40%">
        <Row width="100%" margin="3em 0">
          <IconStyle src={Timeline} alt="Subchannel TimeLine Icon" />
          <Column width="55%">
            <Title3>Timeline Tool</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Schedule your content for hourly, daily, weekly and monthly
              playback.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={OnDemand} alt="Subchannel OnDemand Icon" />
          <Column width="55%">
            <Title3>On Demand Viewing</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Cultivate a library of content for viewers to watch on their own
              time.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Training} alt="Subchannel Training Icon" />
          <Column width="55%">
            <Title3>On-site Training & Migration</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              We assist you in the setup and initial broadcast strategy of your
              channel.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Bank} alt="Subchannel Bank Icon" />
          <Column width="55%">
            <Title3>Ad Bank Tool</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Build your own advertising catalog or get paid when you use ads
              from ours.
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Manager} alt="Subchannel Manager Icon" />
          <Column width="55%">
            <Title3>24/7 Technical Account Manager</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Need help with a problem? We're here to help!
            </Text>
          </Column>
        </Row>
        <Row width="100%" margin="3em 0">
          <IconStyle src={Analytics} alt="Subchannel Analytics Icon" />
          <Column width="55%">
            <Title3>Daily Backups</Title3>
            <Text margin=".8em 0 0 0" lineheight="1.6em">
              Real-time, day over day, week over week and monthly data, based on
              usage is available.
            </Text>
          </Column>
        </Row>
      </Column>
    </Row>
  </Wrapper>
);

export default Features;
