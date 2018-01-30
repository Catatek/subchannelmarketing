import styled, { css } from "styled-components";
import { Row, Column, Wrapper, Title3, Title2, Text } from "../theme/theme";
import React from "react";

class LiveBroadcast extends React.Component {
  render() {
    return (
      <Wrapper backgroundcolor="#F4F4F4">
        <Column width="75%" margin="0 auto">
          <Row alignitems="center" margin="3em 0 0 0">
            <Column>
            <Title3>LIVE BROADCASTING</Title3>
            <Text width="30%">
              Broadcast your content in real-time. We provide all the features
              you need for 24/7 playback automation of your content. Utilizing
              our Timeline will allow the ability to drag & drop shows and ads
              into your program schedule
            </Text>
            </Column>
          <Title2>Placeholder for art</Title2>
          </Row>
        </Column>
      </Wrapper>
    );
  }
}

export default LiveBroadcast;
