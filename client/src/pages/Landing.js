import React from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import { PromiseProvider } from "mongoose";


function Landing(props) {
  return (
    <div className="LandingPage">
      <Logo />
      <Form 
      setUser= {props.setUser}/>
    </div>
  );
}

export default Landing;
