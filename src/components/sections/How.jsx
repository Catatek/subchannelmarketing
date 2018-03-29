import React from "react";
import styled from "styled-components";
import { Text, Title1, Title2, Title3 } from "../theme/theme.js";

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
  padding-bottom: 2em;
  background: linear-gradient(#ffffff, #f7f7f7 85%);
`;

const Colored = styled.div.attrs({
  bordercolor: props => props.bordercolor
})`
  border: 2px solid;
  border-color: ${props => props.bordercolor};
  border-radius: 15px;
  height: 85px;
  width: 88%;
  display: flex;
  align-items: center;
  margin: 1.5em 0;
  max-width: 850px;
  @media screen and (max-width: 900px) {
    height: 130px;
  }
`;

const Styledh3 = styled(Title3)`
  padding-right: 1em;
  margin-left: 1em;
  border-right: 1.5px solid;
  @media screen and (max-width: 900px) {
    margin-right: 0.5em;
  }
`;

export default function How(props) {
  return (
    <Wrapper>
      <Title1>WHAT WE PROVIDE</Title1>
      <Colored bordercolor="#DD694A">
        <Styledh3 fontSize="1.5em">SETUP</Styledh3>
        <Text margin="0 2em" widthmobile="60%" fontsizemobile="1em">
          We help you fill in the blanks to ensure your application is running
          smoothly.
        </Text>
      </Colored>
      <Colored bordercolor="#168787">
        <Styledh3 fontSize="1.5em">TRAINING</Styledh3>
        <Text margin="0 2em" widthmobile="50%" fontsizemobile="1em">
          We train you on how Subchannel can be utilized in your day-to-day
          business.
        </Text>
      </Colored>
      <Colored bordercolor="#F4BC4A">
        <Styledh3 fontSize="1.5em">GROWTH</Styledh3>
        <Text margin="0 2em" widthmobile="50%" fontsizemobile="1em">
          We guide you through the process of how to scale and grow your
          business.
        </Text>
      </Colored>
      <Colored bordercolor="#AED1CF">
        <Styledh3 fontSize="1.5em">SUPPORT</Styledh3>
        <Text margin="0 2em" widthmobile="50%" fontsizemobile="1em">
          We provide technical support and answer any questions you might have.
        </Text>
      </Colored>
    </Wrapper>
  );
}
