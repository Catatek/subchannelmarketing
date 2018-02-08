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

const ElitePlan = () => (
  <PlanContainer>
    <PlanDiv>
      <Title2 primary margin=".5em 0 0 0">
        <b>ELITE</b>
      </Title2>
      <SmallText margin="0" width="55%" lineheight="1.5em">
        Flexible options for scaling enterprises
      </SmallText>
      <Title3 margin=".7em 0 .2em 0">Call for Pricing</Title3>
      <Title3 margin="0 0 0.7em 0">888-888-8888</Title3>
    </PlanDiv>
    <Button>CALL</Button>
    <PlanDiv>
      <SmallText margin=".6em 0" primary>
        + All Pro Features
      </SmallText>
      <SmallText margin=".5em 0">Technical Account Manager</SmallText>
      <SmallText margin=".5em 0">Advanced Analytics</SmallText>
      <SmallText margin=".5em 0">Complete Control over Advertising</SmallText>
      <SmallText margin=".5em 0">Daily Content Backup</SmallText>
      <SmallText margin=".5em 0">Monetization Flexibility</SmallText>
      <SmallText margin=".5em 0">Unlimited User Count</SmallText>
    </PlanDiv>
  </PlanContainer>
);

export default ElitePlan;
