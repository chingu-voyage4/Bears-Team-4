import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import * as userActions from "../../actions/userActions";

class AuthPage extends Component {
  handleSignUp(signUpDetails) {
    this.props.userActions.SignUp(signUpDetails);
  }

  handleLogIn(logInDetails) {
    this.props.userActions.LogIn(logInDetails);
  }

  render() {
    return (
      <div>
        {/* Show Signup page Initially */}
        <Route
          exact
          path="/auth/"
          render={props => {
            return <SignUp handleSignUp={this.handleSignUp.bind(this)} />;
          }}
        />
        <Route
          path="/auth/signup"
          render={props => {
            return <SignUp handleSignUp={this.handleSignUp.bind(this)} />;
          }}
        />

        <Route
          path="/auth/login"
          render={() => {
            return <Login handleLogIn={this.handleLogIn.bind(this)} />;
          }}
        />

        {/* If user is alerady authenticated redirect to homepage */}
        {this.props.user.authenticated ? <Redirect to="/" /> : ""}
      </div>
    );
  }
}

// Specifying which state from store we want as props
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// Specifying which actions from store we want as props
const mapActionsToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AuthPage);
