import React from "react";
import styled from "styled-components";
import StarterPlan from "../../shared/StarterPlan/StarterPlan";
import ProPlan from "../../shared/ProPlan/ProPlan";
import ElitePlan from "../../shared/ElitePlan/ElitePlan";
import { Title1, Row } from "../../theme/theme";
import Slider from "react-slick";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 2em 0;
`;

export default function Plans() {
  const handleClick = e => {
    e.preventDefault();
    window.Intercom("showNewMessage");
  };

  const mobile = window.matchMedia("(max-width: 720px)");

  let settings = {
    dots: true,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    initialSlide: 1,
    speed: 1000
  };
  return (
    <div style={{ textAlign: "center", margin: "0" }}>
      <Title1 margin="3em 0 0 0">PLANS</Title1>
      {mobile.matches ? (
        <div style={{ margin: "3em 0" }}>
          <Slider {...settings}>
            <div style={{ textAlign: "center", margin: "0 auto" }}>
              <StarterPlan click={handleClick} />
            </div>
            <div style={{ textAlign: "center", margin: "0 auto" }}>
              <ProPlan click={handleClick} />
            </div>
            <div style={{ textAlign: "center", margin: "0 auto" }}>
              <ElitePlan click={handleClick} />
            </div>
          </Slider>
        </div>
      ) : (
        <Wrapper>
          <Row margin="4em 0">
            <StarterPlan click={handleClick} />
            <ProPlan click={handleClick} />
            <ElitePlan click={handleClick} />
          </Row>
        </Wrapper>
      )}
    </div>
  );
}
