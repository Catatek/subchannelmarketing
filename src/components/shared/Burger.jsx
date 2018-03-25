import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

function BurgerIcon({ open, ...props }) {
  return (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  );
}

function BurgerMenu({ close }) {
  return (
    <div className="menu">
      <ul>
        <Link to="/media">
          <li onClick={close}>Media</li>
        </Link>
        <Link to="/team">
          <li onClick={close}>Team</li>
        </Link>
        <Link to="/jobs">
          <li onClick={close}>Jobs</li>
        </Link>
      </ul>
    </div>
  );
}

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
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
