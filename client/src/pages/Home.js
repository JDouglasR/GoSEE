import React from "react";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Post from "../components/Post";
import Feed from "../components/Feed";

import { Container  } from '@material-ui/core';

function Home() {
  return (
    <React.Fragment>
      <Logo />
      <Sidebar />
      <Header />
      <Container>
        <Post />
        <Feed />
      </Container>

    </React.Fragment>
  );
}

export default Home;
