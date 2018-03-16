import styled from "styled-components";
import { Column, Title1, Text } from "../../theme/theme";
import React from "react";
import Live from "../../../assets/broadcastAutomation.svg";

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
  height: "332px"
};

const LiveBroadcast = () => (
  <Wrapper>
    <Column width="35%">
      <Title1>LIVE BROADCASTING</Title1>
      <Text lineheight="1.8em">
        Broadcast your content in real-time. We provide all the features you
        need for 24/7 playback automation of your content. Utilizing our
        <b>
          <u>Timeline</u>{" "}
        </b>
        will allow the ability to drag and drop shows and ads into your program
        schedule.
      </Text>
    </Column>
    <img
      src={Live}
      style={ImgStyle}
      alt="Subchannel Live Broadcasting Illustration"
    />
  </Wrapper>
);

export default LiveBroadcast;
