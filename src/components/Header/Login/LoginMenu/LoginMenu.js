/**
 * This component render vertical menu and its is only shown inside of logo area when width is less than 800px.
 * When this component showed SVG Logo and <Login> component is hided.
 * Instead <Login> Component is rendered inside <loginMenu>
 **/

import React, { Component } from "react";

import "./LoginMenu.css";

class LoginMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false // Indicate whether login menu opened or not.
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Toggle login menu's show/hide state when button clicked.
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  hideMenu() {
    this.setState({
      menuOpen: false
    });
  }

  logOut(){
    console.log("Loggin Out");
    this.props.actions.LogOut();
  }

  render() {
    // Display Styles to show/hide login menu according to "menuOpen" state.
    var menuStyle = {
      display: this.state.menuOpen ? "block" : "none"
    };

    const { user } = this.props;
    return (
      <div className="login-menu" onClick={this.toggleMenu}>
        {/* Header of Login Menu */}
        <div className="login">
          <div className="login__photo">
            <i className="far fa-user-circle" />
          </div>
          <div className="login__details">
            <div className="login__details_login">{user.firstName}</div>
            <div className="login__details_cashback">{user.email}</div>
          </div>
        </div>
        <ul className="login-menu__list" style={menuStyle}  onMouseLeave={this.hideMenu}>
          <li>My Saved Offers</li>
          <li>My Saved Stores</li>
          <li>Submitted Coupons</li>
          <li>My Profile & Settings</li>
          <li onClick={this.logOut}>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default LoginMenu;
