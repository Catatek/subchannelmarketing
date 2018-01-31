import styled, { css } from "styled-components";
import { Row, Column, Title1, Title3, Title2, Text } from "../../theme/theme";
import React from "react";
import livebroadcasting from "../../../assets/livebroadcasting-img.png"

const Wrapper = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f4f4;
`;

const circle = {
  margin: "50px 0 0 0",
  width: "400px",
  height: "350px",
  backgroundColor: "#ccc"
};

const LiveBroadcast = () => (
  <Wrapper>
    <Column width="40%">
      <Title1>LIVE BROADCASTING</Title1>
      <Text lineheight="1.8em">
        Broadcast your content in real-time. We provide all the features you
        need for 24/7 playback automation of your content. Utilizing our
        <i>
          <b> Timeline </b>
        </i>
        will allow the ability to drag and drop shows and ads into your program
        schedule.
      </Text>
    </Column>
    <img src={livebroadcasting} style={circle} />
  </Wrapper>
);

export default LiveBroadcast;
