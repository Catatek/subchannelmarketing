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
`;

const ConstructionImgStyle = styled.img`
  width: 400px;
  height: 389px;
  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const StyledLink = styled(Link)`
  margin: 0.3em 0;
  color: #019095;
`;

export default function Construction(props) {
  return (
    <div>
      <InternalHeader pagetitle="subchannel Construction" />
      <Wrapper>
        <Row justifycontent="center">
          <Column margin="1em 2.5em 0 0" marginmobile="1em 2.5em 4em 0">
            <Title1 color="#019095">We're Sorry</Title1>
            <Title2>
              This page is currently under construction.<br /> Please come visit
              us again!
            </Title2>
            <Title3 margin=".5em 0">Instead, try these pages:</Title3>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/team">Team</StyledLink>
            <StyledLink to="/media">Media</StyledLink>
          </Column>
          <Column margin="0 0 0 2.5em" marginmobile="2em 0 0 0">
            <ConstructionImgStyle src={ConstructionImg} alt="Subchannel 404" />
          </Column>
        </Row>
      </Wrapper>
    </div>
  );
}
