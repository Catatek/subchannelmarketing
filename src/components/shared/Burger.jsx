import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BurgerIcon({ open, ...props }) {
  return (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  );
}

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 1.5em 0;
  font-size: 1.4em;
`;

function BurgerMenu({ close }) {
  return (
    <div className="menu">
      <StyledUl>
        <Link to="/">
          <StyledLi onClick={close}>Home</StyledLi>
        </Link>
        <Link to="/media">
          <StyledLi onClick={close}>Media</StyledLi>
        </Link>
        <Link to="/team">
          <StyledLi onClick={close}>Team</StyledLi>
        </Link>
        <Link to="/jobs">
          <StyledLi onClick={close}>Jobs</StyledLi>
        </Link>
        <Link to="/support">
          <StyledLi onClick={close}>Support</StyledLi>
        </Link>
      </StyledUl>
    </div>
  );
}

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "100%",
  border: "none"
};

export default function Hamburger() {
  return (
    <div>
      <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <BurgerMenu close={close} />}
      </Popup>
    </div>
  );
}
