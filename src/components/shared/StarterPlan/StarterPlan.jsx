import React, { Component } from "react";
import {
  Row,
  SmallText,
  Text,
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

const StarterPlan = () => (
  <PlanContainer>
    <PlanDiv>
      <Title2 primary margin=".5em 0 .2em 0">
        <b>STARTER</b>
      </Title2>
      <SmallText margin="0 0 16px 0" width="100%">
        Distribute like a boss
      </SmallText>
      <Title3 margin=".7em 0 .2em 0">$499/m</Title3>
      <SmallText margin="0 0 2.5em 0" plans>
        Billed annually or $799/m
      </SmallText>
    </PlanDiv>
    <Button>UPGRADE</Button>
    <PlanDiv>
      <SmallText margin=".6em 0" primary>
        + Studio Software
      </SmallText>
      <SmallText margin=".5em 0">Customer Support</SmallText>
      <SmallText margin=".5em 0">Meaningful Insights</SmallText>
      <SmallText margin=".5em 0">Technical Ticketing</SmallText>
      <SmallText margin=".5em 0">Advertising Management</SmallText>
      <SmallText margin=".5em 0">Content Distribution Tools</SmallText>
      <SmallText margin=".5em 0">File Management Tools</SmallText>
      <SmallText margin=".5em 0">Monetization Options</SmallText>
      <SmallText margin=".5em 0">Up to 1,000 subscribers</SmallText>
    </PlanDiv>
  </PlanContainer>
);

export default StarterPlan;
