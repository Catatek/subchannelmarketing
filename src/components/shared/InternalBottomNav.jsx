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
  @media (max-width: 720px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 500px) {
    width: 75px;
    height: 75px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 60vh;
  @media (max-width: 500px) {
    height: 100%;
    margin: 3em 0;
  }
`;

const StyledRow = styled(Row)`
  flex-direction: row;
`;

const iconStyle = {
  width: "100%",
  height: "100%"
};

export default function InternalBottomNav(props) {
  return (
    <Wrapper>
      <StyledRow alignitems="center" justifycontent="space-evenly" width="55%">
        <a href="https://medium.com/teamsubchannel" target="_blank">
          <Column margin="0 em">
            <Box>
              <img
                src={BlogIcon}
                style={iconStyle}
                alt="Subchannel Team Icon"
              />
            </Box>
            <Title3 margin=".4em 0" marginmobile="1em 0">
              {props.titleone}
            </Title3>
          </Column>
        </a>
        <Link to="/media">
          <Column margin="0 .8em">
            <Box>
              <img
                src={MediaIcon}
                style={iconStyle}
                alt="Subchannel Team Icon"
              />
            </Box>
            <Title3 margin=".4em 0" marginmobile="1em 0">
              {props.titletwo}
            </Title3>
          </Column>
        </Link>
        <Link to="/jobs">
          <Column margin="0 .8em">
            <Box>
              <img
                src={JobsIcon}
                style={iconStyle}
                alt="Subchannel Team Icon"
              />
            </Box>
            <Title3 margin=".4em 0" marginmobile="1em 0">
              {props.titlethree}
            </Title3>
          </Column>
        </Link>
      </StyledRow>
    </Wrapper>
  );
}
