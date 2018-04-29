/**
 * This component render vertical menu and its is only shown inside of logo area when width is less than 800px.
 * When this component showed SVG Logo and <Login> component is hided.
 * Instead <Login> Component is rendered inside <MobileMenu>
 **/

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Login from "../Login/Login";

import "./MobileMenu.css";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false // Indicate whether mobile menu opened or not.
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  // Toggle mobile menu's show/hide state when button clicked.
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

  render() {
    // Display Styles to show/hide mobile menu according to "menuOpen" state.
    var menuStyle = {
      display: this.state.menuOpen ? "block" : "none"
    };

    return (
      <div className="mobile-menu">
        <a onClick={this.toggleMenu} className="router-link-reset">
          {/* Show suitable button according to "menuOpen" state */}
          {this.state.menuOpen ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </a>
        <ul
          className="mobile-menu__list"
          style={menuStyle}
          onClick={this.hideMenu}
        >
          {/* Rendering hidden <Login> Componone inside mobile menu */}
          <li className="mobile-menu__list__login">
            <Login user={this.props.user} />
          </li>
          <li>
            <Link to="/" className="router-link-reset">
              Homepage
            </Link>
          </li>
          <li>My Saved Offers</li>
          <li>My Saved Stores</li>
          <li>Submitted Coupons</li>
          <li>My Profile & Settings</li>
          <li onClick={() => this.props.actions.LogOut()}>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default MobileMenu;
