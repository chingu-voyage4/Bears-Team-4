import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

class AuthPage extends Component {
  render() {
    return (
      <div>
        {/* Show Signup page Initially */}
        <Route exact path="/auth/" component={SignUp} />
        <Route path="/auth/signup" component={SignUp} />
        <Route path="/auth/login" component={Login} />
      </div>
    );
  }
}

export default AuthPage;
