/**
 * This component render Horizontal Main Menu.
 * Each menu item render secific page between HEADER and FOTTER. (See App.js)
 **/

import { Link } from "react-router-dom";
import React, { Component } from "react";

import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>Coupons</li>
          <li>Deals</li>
          <li>Near Me</li>
          <li>
            <Link to="/couponSubmit" className="router-link-reset">
              Submit Coupon
            </Link>
          </li>
          <li>
            <Link to="/stores" className="router-link-reset">
              Stores &nbsp;<i className="fas fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/categories" className="router-link-reset">
              Categories &nbsp;<i className="fas fa-angle-down" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
