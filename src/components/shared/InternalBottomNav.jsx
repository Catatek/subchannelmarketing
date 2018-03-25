import React from "react";
import styled from "styled-components";
import { Row, Column, Title3 } from "../theme/theme";
import JobsIcon from "../../assets/jobs.jpg";
import MediaIcon from "../../assets/media.jpg";
import BlogIcon from "../../assets/blog.jpg";
import { Link } from "react-router-dom";

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
  width: "175px",
  height: "175px"
};

export default function InternalBottomNav(props) {
  return (
    <Wrapper>
      <Row alignitems="center" justifycontent="space-evenly" width="55%">
        <a href="https://medium.com/teamsubchannel" target="_blank">
          <Column>
            <Box>
              <img
                src={BlogIcon}
                style={teamIconStyle}
                alt="Subchannel Team Icon"
              />
            </Box>
            <Title3 margin=".4em 0">{props.titleone}</Title3>
          </Column>
        </a>
        <Link to="/media">
          <Column>
            <Box>
              <img
                src={MediaIcon}
                style={teamIconStyle}
                alt="Subchannel Team Icon"
              />
            </Box>
            <Title3 margin=".4em 0">{props.titletwo}</Title3>
          </Column>
        </Link>
        <Link to="/jobs">
          <Column>
            <Box>
              <img
                src={JobsIcon}
                style={teamIconStyle}
                alt="Subchannel Team Icon"
              />
            </Box>
            <Title3 margin=".4em 0">{props.titlethree}</Title3>
          </Column>
        </Link>
      </Row>
    </Wrapper>
  );
}
