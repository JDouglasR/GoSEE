import React from "react";
import Navigation from "../Navigation";
import "style.css";

function Header() {
  return (
    <React.Fragment>
      <Navigation />
      <h2>This is the Header</h2>
    </React.Fragment>
  );
}

export default Header;
