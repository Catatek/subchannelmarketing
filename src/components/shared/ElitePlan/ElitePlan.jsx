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
    color: #efc776;
    border: none;
    box-shadow: none;
  }
`;

export default function ElitePlan({ click }) {
  return (
    <PlanContainer backgroundcolor="#EAB548">
      <PlanDiv>
        <Title1 color="#fff" margin=".5em 0 .2em 0">
          ELITE
        </Title1>
        <SmallText
          color="#fff"
          margin="0 0 3.5em 0"
          width="100%"
          fontsizemobile="0.7em"
        >
          Flexible options for scaling enterprises
        </SmallText>
        <Title3 color="#fff" margin="0" plans>
          Contact us for<br /> pricing
        </Title3>
        <Title3 color="#fff" margin="0 0 .8em 0" plans />
        <StyledButton onClick={click}>CONTACT</StyledButton>
      </PlanDiv>
      <PlanDiv>
        <SmallText
          fontweight="600"
          color="#fff"
          margin=".6em 0"
          fontsizemobile="0.7em"
        >
          + Pro Features
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Dedicated Technical Account Manager
        </SmallText>

        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Complete Advertising Management
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Content Distribution Tools
        </SmallText>

        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Complete Monetization Options
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Integrations
        </SmallText>
        <SmallText color="#fff" margin=".5em 0" fontsizemobile="0.7em">
          Unlimited Subscribers
        </SmallText>
      </PlanDiv>
    </PlanContainer>
  );
}
