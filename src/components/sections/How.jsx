import React from "react";
import styled from "styled-components";
import Blue from "../../assets/blueBox.svg";
import Orange from "../../assets/orangeBox.svg";
import Teal from "../../assets/tealBox.svg";
import Yellow from "../../assets/yellowBox.svg";
import { Text, Title1, Title2 } from "../theme/theme.js";

const Wrapper = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
  background: linear-gradient(#ffffff, #f7f7f7);
`;

function ColorDiv() {
  return <div style={{ border: "1px solid    `${props.color}`" }} />;
}

export default function How({ color }) {
  return (
    <Wrapper>
      <ColorDiv>
        <Title2>SETUP</Title2>
        <Title2>SETUP</Title2>
        <Text>SETUP</Text>
      </ColorDiv>
    </Wrapper>
  );
}
