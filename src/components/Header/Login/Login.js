/**
 * When user is not logged this component render "LogIn/SignUp" message and redirect to "/login" page.
 * When user is logged this component render username and drop down menu which have user specific tasks.
 **/

import React, { Component } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    const { user } = this.props;
    console.log(this.props);
    const unAuthenticated = (
      <Link to="/auth" className="router-link-reset">
        <div className="login__details_login">Log In / Sign Up</div>
        <div className="login__details_cashback">$0.00 Cash Back</div>
      </Link>
    );

    const authenticated = (
      <div>
        <div className="login__details_login">{user.firstName}</div>
        <div className="login__details_cashback">{user.email}</div>
      </div>
    );
    return (
      <div className="login">
        <div className="login__photo">
          <i className="far fa-user-circle" />
        </div>
        <div className="login__details" >
          {user.authenticated ? authenticated : unAuthenticated}
        </div>
      </div>
    );
  }
}

export default Login;
