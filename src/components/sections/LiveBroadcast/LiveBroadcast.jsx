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
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    height: 110vh;
    justify-content: center;
  }
`;

const ImgStyle = styled.img`
  width: 400px;
  height: 332px;
  order: 1;
  @media (max-width: 500px) {
    width: 300px;
    height: 249px;
  }
`;

const LiveBroadcast = () => (
  <Wrapper>
    <Column width="40%" marginmobile="1em 0">
      <Title1>BROADCAST AUTOMATION</Title1>
      <Text lineheight="2.2em" lineheightmobile="2em" widthmobile="80%">
        Broadcast your content in real-time. We provide all the features you
        need for 24/7 playback automation of your content. Utilizing our
        <b>
          {" "}
          <u>Timeline</u>{" "}
        </b>
        will allow the ability to drag and drop shows and ads into your program
        schedule.
      </Text>
    </Column>
    <ImgStyle src={Live} alt="Subchannel Live Broadcasting Illustration" />
  </Wrapper>
);

export default LiveBroadcast;
