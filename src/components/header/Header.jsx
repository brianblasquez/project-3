import React from "react";
import "./Header.css";
import LogoDeskTop from "../../images/logo-desktop.svg";

function Header() {
  return (
    <div className="header">
      <img src={LogoDeskTop} />

      <button className="buttonChange">MODO DARK</button>
    </div>
  );
}

export default Header;
