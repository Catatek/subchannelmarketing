import React from "react";
import {
  SmallText,
  Title1,
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

const StyledButton = styled(Button)`
  color: #fff;
  background-color: inherit;
  border: 1px solid #fff;
  &:hover {
    background-color: #fff;
    color: #168787;
    border: none;
    box-shadow: none;
  }
`;

export default function StarterPlan({ click }) {
  return (
    <PlanContainer backgroundcolor="#168787">
      <PlanDiv>
        <Title1 color="#fff" margin=".5em 0 .2em 0">
          STARTER
        </Title1>
        <SmallText
          color="#fff"
          margin="0 0 16px 0"
          width="100%"
          fontsizemobile="0.7em"
        >
          Start your subscription business
        </SmallText>
        <Title3 color="#fff" margin=".7em 0 .2em 0">
          $49/m
        </Title3>
        <SmallText
          color="#fff"
          margin="0 0 2.5em 0"
          fontsizemobile="0.7em"
          plans
        >
          + .99 per subscriber
        </SmallText>
      </PlanDiv>
      <StyledButton onClick={click}>START</StyledButton>
      <PlanDiv>
        <SmallText color="#fff" margin=".6em 0" fontsizemobile="0.7em">
          + Studio Software
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Customer Support
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Meaningful Insights
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Technical Ticketing
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Advertising Management
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Content Distribution Tools
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          File Management Tools
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Monetization Options
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Up to 1,000 subscribers
        </SmallText>
      </PlanDiv>
    </PlanContainer>
  );
}
