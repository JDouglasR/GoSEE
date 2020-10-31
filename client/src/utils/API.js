import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts/");
  },
  createUser: function (user) {
    return axios.post("/api/user/", user);
  },
  // // Gets the posts with the given id
  getCityPosts: function (city) {
    return axios.get("/api/posts/" + city);
  },
  savePost: function (post) {
    return axios.post("/api/posts/", post);
  },
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/posts/" + id);
  // },
};
