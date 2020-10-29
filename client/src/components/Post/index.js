import React from "react";
import { Grid, Avatar, TextField, Button } from "@material-ui/core";
import "./style.css";

function Post() {
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
        <Grid item sm={6}>
          <TextField
            id=""
            className="mainField"
            label="Share plans for any future trips"
            variant="outlined"
          />
          <TextField
            id=""
            className="locationField"
            label="#Location"
            variant="outlined"
          />
          <Button id="" className="postButton" variant="contained">
            Post
          </Button>
        </Grid>
        <Grid item sm={6}>
          <TextField
            id="citySearch"
            className="searchField"
            label="Search by City"
            variant="outlined"
          />
          <Button id="" className="searchButton" variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Post;
