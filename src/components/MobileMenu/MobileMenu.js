import React, { Component } from "react";
import "./MobileMenu.css";
import Login from "../Login/Login";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    var menuStyle = {
      display: this.state.menuOpen ? "block" : "none"
    };

    return (
      <div className="mobileMenu">
        <a onClick={this.toggleMenu.bind(this)}>
          {this.state.menuOpen ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </a>
        <ul className="mobileMenu__list" style={menuStyle}>
          <li className="mobileMenu__list__login">
            <Login />
          </li>
          <li>Cash Back</li>
          <li>Gift Card Deals</li>
          <li>Near Me</li>
          <li>Spring Deals</li>
          <li>
            Departments &nbsp;<i className="fas fa-angle-down" />
          </li>
          <li>
            Explore &nbsp;<i className="fas fa-angle-down" />
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileMenu;
