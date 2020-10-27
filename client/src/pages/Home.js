import React from "react";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Feed from "../components/Feed";

function Home() {
  return (
    <React.Fragment>
      <Logo />
      <Sidebar />
      <Header />
      <Feed />

    </React.Fragment>
  );
}

export default Home;
