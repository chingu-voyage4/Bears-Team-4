import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>Cash Back</li>
          <li>Gift Card Deals</li>
          <li>Near Me</li>
          <li>Spring Deals</li>
          <li>
            <Link to="/stores/" className="routerLinkReset">
              Departments &nbsp;<i className="fas fa-angle-down" />
            </Link>
          </li>
          <li>
            Explore &nbsp;<i className="fas fa-angle-down" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
