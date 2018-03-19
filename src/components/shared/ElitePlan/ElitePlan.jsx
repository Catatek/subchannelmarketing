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

const StyledButton = styled(Button)`
  color: #fff;
  background-color: inherit;
  border: 1px solid #fff;
`;

const ElitePlan = () => (
  <PlanContainer backgroundcolor="#EAB548">
    <PlanDiv>
      <Title3 fontSize="1.6em" color="#fff" margin=".5em 0 .2em 0">
        <b>ELITE</b>
      </Title3>
      <SmallText color="#fff" margin="0 0 4em 0" width="100%">
        Flexible options for scaling enterprises
      </SmallText>
      <StyledButton>CALL</StyledButton>
      <Title3 color="#fff" margin="0 0 1.5em 0" plans>
        888-888-8888
      </Title3>
    </PlanDiv>

    <PlanDiv>
      <SmallText color="#fff" margin=".6em 0">
        + Studio Software
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Customer Support
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Meaningful Insights
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Technical Ticketing
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Advertising Management
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Content Distribution Tools
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        File Management Tools
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Monetization Options
      </SmallText>
      <SmallText color="#fff" margin=".5em 0">
        Up to 1,000 subscribers
      </SmallText>
    </PlanDiv>
  </PlanContainer>
);

export default ElitePlan;
