import React from "react";
import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
import Drag from "../../../assets/dragDropAdvertising.svg";

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(#ffffff, #f7f7f7);
`;

const ImgStyle = {
  width: "400px",
  height: "331px"
};
const DragDropAdvertising = () => (
  <Wrapper>
    <img
      src={Drag}
      style={ImgStyle}
      alt="Subchannel Drag and Drop Advertising"
    />
    <Column width="40%">
      <Title1>DRAG & DROP ADVERTISING</Title1>
      <Text lineheight="2.2em">
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
