import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts/");
  },
  // Create user account info
  createUser: function (user) {
    return axios.post("/api/user/", user);
  },
  // Gets posts by city name
  getCityPosts: function (city) {
    return axios.get("/api/posts/" + city);
  },
  // Save posts to database
  savePost: function (post) {
    return axios.post("/api/posts/", post);
  },  
  // Get logged in user info
  getUser: function () {
    return axios.get("/api/user/user_data")
  },
  // Login verification 
  loginUser: function (user) {
    return axios.post("/api/user/login", user);
  }

  
};
