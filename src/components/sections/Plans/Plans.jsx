import React from "react";
import styled from "styled-components";
import StarterPlan from "../../shared/StarterPlan/StarterPlan";
import ProPlan from "../../shared/ProPlan/ProPlan";
import ElitePlan from "../../shared/ElitePlan/ElitePlan";
import { Title1, Row } from "../../theme/theme";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 2em 0;
`;

const Plans = () => (
  <Wrapper>
    <Title1>PLANS</Title1>
    <Row margin="4em 0">
      <StarterPlan />
      <ProPlan />
      <ElitePlan />
    </Row>
  </Wrapper>
);

export default Plans;
