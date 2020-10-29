import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Post from "../components/Post";
import Feed from "../components/Feed";
import API from "../utils/API";

import { Container } from "@material-ui/core";

function Home() {
  const [items, setItems] = useState([]);

  function fetchMoreData() {
    API.getPosts()
      .then((res) => {
        console.log(res);
        setItems(items.concat(res.data));
      })
      .catch((err) => console.error(err));

    // if (items.length >= 30) {
    //   setHasMore(false);
    //   return;
    // }
    // setTimeout(() => {
    //   setItems(items.concat(Array.from({ length: 20 })));
    // }, 1500);
  }

  function getCityPosts() {
    API.getCityPosts()
      .then((res) => {
        console.log(res);
        setItems(items.concat(res.data));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <React.Fragment>
      <Logo />
      <Sidebar />
      <Header />
      <Container>
        <Post getCityPosts={getCityPosts} />
        <Feed fetchMoreData={fetchMoreData} items={items} />
      </Container>
    </React.Fragment>
  );
}

export default Home;
