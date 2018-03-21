import React from "react";
import styled from "styled-components";
import { Row, Column, Title3 } from "../theme/theme";
import TeamIcon from "../../assets/teamIcon.svg";
import MediaIcon from "../../assets/mediaIcon.svg";
import BlogIcon from "../../assets/blog.svg";

const Box = styled.div`
  width: 175px;
  height: 175px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 60vh;
`;

const teamIconStyle = {
  width: "140px",
  height: "121px"
};

export default function InternalBottomNav(props) {
  return (
    <Wrapper>
      <Row alignitems="center" justifycontent="space-evenly" width="55%">
        <Column>
          <Box>
            <img
              src={MediaIcon}
              style={teamIconStyle}
              alt="Subchannel Team Icon"
            />
          </Box>
          <Title3 margin=".4em 0">{props.titleone}</Title3>
        </Column>
        <Column>
          <Box>
            <img
              src={BlogIcon}
              style={teamIconStyle}
              alt="Subchannel Team Icon"
            />
          </Box>
          <Title3 margin=".4em 0">{props.titletwo}</Title3>
        </Column>
        <Column>
          <Box>
            <img
              src={TeamIcon}
              style={teamIconStyle}
              alt="Subchannel Team Icon"
            />
          </Box>
          <Title3 margin=".4em 0">{props.titlethree}</Title3>
        </Column>
      </Row>
    </Wrapper>
  );
}
