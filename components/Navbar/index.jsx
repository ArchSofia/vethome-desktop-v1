import React from "react";
import "./Navbar.css";

function Navbar(props) {
  const { children } = props;

  return (
    <div className="navbar">
      <h1 className="title">{children}</h1>
    </div>
  );
}

export default Navbar;
