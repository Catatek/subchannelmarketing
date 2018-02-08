import React from "react";
import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
//import dragdropadvertising from "../../../assets/dragdropadvertising-img.png";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fcfbf5;
`;

const circle = {
  margin: "25px 0 0 0",
  width: "400px",
  height: "350px",
  backgroundColor: "#F6BB51"
};

const DragDropAdvertising = () => (
  <Wrapper>
    <div style={circle} />
    <Column width="40%">
      <Title1>DRAG & DROP ADVERTISING</Title1>
      <Text lineheight="1.8em">
        Utilizing our{" "}
        <b>
          {" "}
          <u>Ad Bank</u>{" "}
        </b>{" "}
        gives you the ability to earn additional revenue by including our
        sponsored ads or by selling your own. In turn, you can give your
        advertisers access to our Ad Bank, so they can upload their content,
        manage their advertising budget and generate additional revenue for your
        channel.
      </Text>
    </Column>
  </Wrapper>
);

export default DragDropAdvertising;
