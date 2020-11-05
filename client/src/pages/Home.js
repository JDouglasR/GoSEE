import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Post from "../components/Post";
import Feed from "../components/Feed";
import API from "../utils/API";

import { Container } from "@material-ui/core";
import { PromiseProvider } from "mongoose";

function Home(props) {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([])

  //   function handleInputChange(event) {
  //     const { value } = event.target;
  //     setSearch(value);
  //   }
  useEffect(() => {
    getUser();
  }, []);

  // Get user data and filter based on logged in ID
  function getUser() {    
    API.getUser()
    .then((res) => {
      var newUserArray = res.data.filter(user => {
        return user._id == props.user._id;
      })
      setUser(newUserArray);
      console.log(newUserArray);
      
    })
    .catch((err) => console.log(err));
  }

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
          setItems(res.data);
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
      <Sidebar id={props.id} items={items} />
      <Header />
      <Container>
        <Post getCityPosts={getCityPosts} makeAPost={makeAPost} id={props.id} />
        <Feed showAllPosts={showAllPosts} items={items} />
      </Container>
    </React.Fragment>
  );
}

export default Home;
