import React from "react";
import clsx from "clsx";
import "./style.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list: {
    width: 400,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    console.log(props.userPosts);
    console.log(props.user);
  };


  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
    >



      <div className="sidebar-header">
        <Avatar className="sidebar-avatar" src="/broken-image.jpg" />

        <p className="sidebar-name"> {props.user.firstName} {props.user.lastName}</p>
  
      </div>

      <p className="sidebar-email">Email</p>
      <a className="sidebar-logout" href="/">Log out</a>

      <p className="sidebar-posts">

      <div>
        {props.userPosts
          .map((i) => {
              return (
                <div>
                  <p className="postName">
                 
                  </p>

                  <div>{i.day}</div>
                  <div>{i.post}</div>
                  <div>{i.hashtag}</div>
 
                </div>
              );
         
            })
          }
          
</div>


      </p>
    </div>
  );

  return (
    <div className="top-right">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>My Account</span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
