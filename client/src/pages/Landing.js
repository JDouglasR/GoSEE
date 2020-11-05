import React from "react";
import Logo from "../components/Logo";
import FormTabs from "../components/FormTabs";
import { PromiseProvider } from "mongoose";

function Landing(props) {
  return (
    <div className="LandingPage">
      <Logo />
      <FormTabs setUser={props.setUser} />
    </div>
  );
}

export default Landing;
