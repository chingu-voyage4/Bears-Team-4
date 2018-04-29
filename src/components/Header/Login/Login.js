/**
 * When user is not logged this component render "LogIn/SignUp" message and redirect to "/login" page.
 * When user is logged this component render username and drop down menu which have user specific tasks.
 **/

import { Link } from "react-router-dom";
import React, { Component } from "react";

import LoginMenu from "./LoginMenu/LoginMenu";

import "./Login.css";

class Login extends Component {
  render() {
    const unAuthenticated = (
      <div className="login">
        <div className="login__photo">
          <i className="far fa-user-circle" />
        </div>
        <div className="login__details">
          <Link to="/auth" className="router-link-reset">
            <div className="login__details_login">Log In / Sign Up</div>
            <div className="login__details_cashback">$0.00 Cash Back</div>
          </Link>
        </div>
      </div>
    );

    return this.props.user.authenticated ? <LoginMenu user={this.props.user} actions={this.props.actions}/> : unAuthenticated;
  }
}

export default Login;
