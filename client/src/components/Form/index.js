import React from 'react';
import clsx from 'clsx';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../TabPanel';
import { FormControl, FormControlLabel, InputLabel, Input, FormHelperText } from '@material-ui/core';


const useStyles = makeStyles({
  list: {
    width: 400,
  }
});




export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })} >

        
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="Create an Account" />
        <Tab label="Login" />
      </Tabs>
      <TabPanel  value={value} index={0}>
        
      <div className="lp-form">
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input id="firstName" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">You must enter your first name.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input id="lastName" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">You must enter your last name.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="email" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Password must be 8-20 characters.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
        <Input id="confirmPassword" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Password must match.</FormHelperText>
      </FormControl>
      <Button id="submitButton" className="submitButton" variant="contained">Create Account</Button>
      </div>







      </TabPanel>
      <TabPanel  value={value} index={1}>

      <div className="lp-form">  
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="email" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text"></FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text"></FormHelperText>
      </FormControl>
      <Button id="submitButton" className="submitButton" variant="contained">Login</Button>
      </div>

      </TabPanel>


    
    </div>
  );
  

  return (
    <div>
      <span className="bottom-right">
       <h1>CTA Title: Want to Travel? </h1>
        <p>
          Paragraph explaining how easy it is to plan trips with our app.
        </p>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Get Started </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </span>
    </div>
  );
}