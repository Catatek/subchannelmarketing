import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { Row } from "../theme/theme";
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

const Styled_ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const Styled_li = styled.li`
  margin: 1.5em 0;
  font-size: 1.4em;
`;

function BurgerMenu({ close }) {
  return (
    <div className="menu">
      <Styled_ul>
        <Link to="/media">
          <Styled_li onClick={close}>Media</Styled_li>
        </Link>
        <Link to="/team">
          <Styled_li onClick={close}>Team</Styled_li>
        </Link>
        <Link to="/jobs">
          <Styled_li onClick={close}>Jobs</Styled_li>
        </Link>
        <Link to="/support">
          <Styled_li onClick={close}>Support</Styled_li>
        </Link>
      </Styled_ul>
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
