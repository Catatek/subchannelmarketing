import React from "react";
import {
  SmallText,
  Title2,
  Title3,
  PlanContainer,
  Button
} from "../../theme/theme";
import styled from "styled-components";

const PlanDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProPlan = () => (
  <PlanContainer>
    <PlanDiv>
      <Title2 primary margin=".5em 0 0 0">
        <b>PRO</b>
      </Title2>
      <SmallText margin="0" width="55%" lineheight="1.5em">
        Flexible options designed for your organization
      </SmallText>
      <Title3 margin=".7em 0 .2em 0">$1,799/m</Title3>
      <SmallText margin="0 0 2.5em 0" plans>
        Billed annually or $2,199/m
      </SmallText>
    </PlanDiv>
    <Button>UPGRADE</Button>
    <PlanDiv>
      <SmallText margin=".6em 0" primary>
        + All Starter Features
      </SmallText>
      <SmallText margin=".5em 0">24/7 Customer Support</SmallText>
      <SmallText margin=".5em 0">Actionable Insights</SmallText>
      <SmallText margin=".5em 0">Priority Technical Ticketing</SmallText>
      <SmallText margin=".5em 0">Weekly Content Backup</SmallText>
      <SmallText margin=".5em 0">Up to 10,000 subscribers</SmallText>
    </PlanDiv>
  </PlanContainer>
);

export default ProPlan;
