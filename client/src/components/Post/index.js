import React, { useRef } from "react";
import { Grid, Avatar, TextField, Button } from "@material-ui/core";
import "./style.css";

function Post(props) {
  const citySearchInput = useRef();
  const postInput = useRef();
  const hashtagInput = useRef();

  return (
    <React.Fragment>
      <Grid
        className="container"
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item sm={1}>
          <Avatar className="avatar" src="/broken-image.jpg" />
        </Grid>
        <Grid item md={6} sm={12}>
          <TextField
            id=""
            className="mainField"
            label="Share plans for any future trips"
            variant="outlined"
            inputRef={postInput}
          />
          <TextField
            id=""
            className="locationField"
            label="#Location"
            variant="outlined"
            inputRef={hashtagInput}
          />
          <Button
            id=""
            className="postButton"
            variant="contained"
            onClick={() => {
              console.log(props.user._id);
              props.makeAPost({                
                id: props.user._id,
                post: postInput.current.value,
                hashtag: hashtagInput.current.value,
              });
              postInput.current.value = "";
              hashtagInput.current.value = "";
            }}
          >
            Post
          </Button>
        </Grid>
        <Grid item md={6} sm={12}>
          <TextField
            id="citySearch"
            className="searchField"
            label="Search by City"
            variant="outlined"
            inputRef={citySearchInput}
          />
          <Button
            id=""
            className="searchButton"
            variant="contained"
            onClick={() => {
              const name = citySearchInput.current.value;
              const nameCapitalized =
                name.charAt(0).toUpperCase() + name.slice(1);
              props.getCityPosts(nameCapitalized);
              citySearchInput.current.value = "";
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Post;
