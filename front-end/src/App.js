import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { withAuthentication } from "./components/Session";
import { AuthenticatedUserContext } from "./components/Session/index.js";

import Routes from "./components/Routes/Routes.js";
import Navigation from "./components/Navigation/Navigation";
import SignOut from "./components/SignOut/SignOut.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <AuthenticatedUserContext.Consumer>
            {authenticatedUser =>  (authenticatedUser ? <SignOut /> : null)}
          </AuthenticatedUserContext.Consumer>
          <Routes className="routes" />
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}



export default withAuthentication(App);
