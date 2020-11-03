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

  //   function handleInputChange(event) {
  //     const { value } = event.target;
  //     setSearch(value);
  //   }

  function showAllPosts() {
    API.getPosts()
      .then((res) => {
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

  function getCityPosts(city) {
    API.getCityPosts(city)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.error(err));
  }

  function makeAPost(post) {
    API.savePost(post)
      .then((res) => {
        if (res) {
          setItems(items.concat(res.data));
        } else {
          showAllPosts();
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    showAllPosts();
  }, []);

  return (
    <React.Fragment>
      <Logo />
      <Sidebar />
      <Header />
      <Container>
        <Post getCityPosts={getCityPosts} makeAPost={makeAPost} />
        <Feed showAllPosts={showAllPosts} items={items} />
      </Container>
    </React.Fragment>
  );
}

export default Home;
