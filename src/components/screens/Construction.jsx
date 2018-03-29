import React from "react";
import styled from "styled-components";
import ConstructionImg from "../../assets/construction.svg";
import { Column, Title1, Title2, Text, Row, Title3 } from "../theme/theme";
import { Link } from "react-router-dom";
import InternalHeader from "../shared/InternalHeader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 65px);
  width: 100%;
  @media (max-width: 720px) {
    height: 100%;
    margin: 3em 0;
    align-items: center;
  }
`;

const ConstructionImgStyle = styled.img`
  width: 400px;
  height: 389px;
  margin: 0 0 0 2.5em;
  @media (max-width: 720px) {
    width: 300px;
    height: 292px;
    margin: 0;
  }
  @media (max-width: 500px) {
    width: 250px;
    height: 244px;
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  margin: 0.3em 0;
  color: #019095;
`;

const StyledRow = styled(Row)`
  @media (max-width: 720px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const StyledColumn = styled(Column)`
  margin: 1em 2.5em 0 0;
  width: 40%;
  @media (max-width: 720px) {
    align-items: center;
    width: 95%;
    margin: 2em auto;
  }
`;

export default function Construction(props) {
  return (
    <div>
      <InternalHeader pagetitle="subchannel Construction" />
      <Wrapper>
        <StyledRow justifycontent="center">
          <StyledColumn>
            <Title1 color="#019095">We're Sorry</Title1>
            <Title2 lineheight="1.4em">
              This page is currently under construction. Please come visit us
              again!
            </Title2>
            <Title3 margin=".5em 0">Instead, try these pages:</Title3>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/team">Team</StyledLink>
            <StyledLink to="/media">Media</StyledLink>
          </StyledColumn>
          <Column>
            <ConstructionImgStyle src={ConstructionImg} alt="Subchannel 404" />
          </Column>
        </StyledRow>
      </Wrapper>
    </div>
  );
}
