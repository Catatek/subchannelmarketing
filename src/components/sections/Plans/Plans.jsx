import React from "react";
import styled from "styled-components";
import StarterPlan from "../../shared/StarterPlan/StarterPlan";
import ProPlan from "../../shared/ProPlan/ProPlan";
import ElitePlan from "../../shared/ElitePlan/ElitePlan";

const Wrapper = styled.section`
  height: 115vh;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  margin: 0 0 0 220px;
`;

const Plans = () => (
  <Wrapper>
    <StarterPlan />
    <ProPlan />
    <ElitePlan />
  </Wrapper>
);

export default Plans;
