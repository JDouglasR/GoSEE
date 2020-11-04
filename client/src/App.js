import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import "./App.css";

class App extends Component {

  state = {id: undefined};


  setUser = (id) => {
    this.setState({id})
  }

  render() {
    return (
      <BrowserRouter basename={"/"}>
        <div>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/feed" component={Home} exact id={this.state.id}/>
            <Route path="/profile" component={Profile} id={this.state.id}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
