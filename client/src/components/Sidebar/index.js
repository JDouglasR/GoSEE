import React from "react";
import clsx from "clsx";
import "./style.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const useStyles = makeStyles({
  list: {
    height: "auto",
  }
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

      <p className="sidebar-email">{props.user.email}</p>
      <p className="sidebar-city">{props.user.city}</p>
      <p><a href="/" className="sidebar-logout">Log out</a></p>

      <h4 className="post-title">Your Recent Posts</h4>

        {props.userPosts
          .map((i) => {
              const date = new Date(i.day);
              const month = new Array();
              month[0] = "January";
              month[1] = "February";
              month[2] = "March";
              month[3] = "April";
              month[4] = "May";
              month[5] = "June";
              month[6] = "July";
              month[7] = "August";
              month[8] = "September";
              month[9] = "October";
              month[10] = "November";
              month[11] = "December";

              const hours = new Date(i.day).getHours();
              const ampm = (hours >= 12) ? " pm" : " am";

              return (
                <div className="sidebar-posts">
                  <span className="delete-icon" onClick={ ()=> props.handleRemoveItem(i.id)} ><DeleteForeverIcon /></span>
                  <p className="post">{i.post}</p>
                  <p className="hashtag">#{i.hashtag}</p>
                    <span className="time">
                     { month[date.getMonth()] + 
                        " " +
                        date.getDate() +
                        ", " +
                        date.getFullYear() +
                        " | " +
                        ((date.getHours() + 24) % 12 || 12) +
                        ":" +
                        ((date.getMinutes()<10?'0':'') + + date.getMinutes()) + ampm}
                    </span>
                </div>
              );
          })
        .reverse()}
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
