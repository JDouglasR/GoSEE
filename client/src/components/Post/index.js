import React from "react";
import { Grid, Avatar, TextField, Button  } from '@material-ui/core';
import "./style.css";

function Post() {
  return (
    <React.Fragment>
       <Grid className="container" container direction="row" justify="center" alignItems="center" spacing={2}>
        
        <Grid item sm={1}>
          <Avatar className="avatar" src="/broken-image.jpg" />
        </Grid>

        <Grid item sm={6}>
        <TextField className="mainField" label="Share plans for any future trips" variant="outlined" />
        <TextField className="locationField" label="#Location" variant="outlined" />
        {/* <TextField className="mainField" label="Share reviews/plans of taken or future trips" />
          <TextField className="locationField" label="#Location" /> */}
          
          <Button className="postButton" variant="contained">Post</Button>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default Post;


