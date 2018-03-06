import React, { Component } from "react";
import "./Login.css";

import { Route, Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__photo">
          <i className="far fa-user-circle" />
        </div>
        <div className="login__details">
          <Link to="/login" className="routerLinkReset">
            <div className="login__details_login">Log In / Sign Up</div>
            <div className="login__details_cashback">$0.00 Cash Back</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
