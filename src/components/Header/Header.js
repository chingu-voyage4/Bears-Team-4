/**
 * This component render LOGO (SVG LOGO | MOBILE_MENU) + SEARCH + LOGIN + MENU
 **/

import { Link } from "react-router-dom";
import React, { Component } from "react";

import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import SearchContainer from "../Containers/SearchContainer";

import "./Header.css";
import logo from "../../images/logoHeader.svg";

/**
 * <div className="header-overlay"> - Just to give full width purple bar.
 * <div className="header__logo__mobile"> - Only shown when less than 800px
 **/
class Header extends Component {
  render() {
    return (
      <div className="header-overlay">
        <div className="header">
          <div className="header__logo">
            <Link to="/" className="router-link-reset">
              <img src={logo} alt="RetailMeNot" className="header__logo__svg" />
            </Link>
            <div className="header__logo__mobile">
              <MobileMenu />
            </div>
          </div>
          <div className="header__search">
            <SearchContainer />
          </div>
          <div className="header__login">
            <Login />
          </div>
          <div className="header__menu">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
