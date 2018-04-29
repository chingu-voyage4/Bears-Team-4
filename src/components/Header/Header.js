/**
 * This component render LOGO (SVG LOGO | MOBILE_MENU) + SEARCH + LOGIN + MENU
 **/

import { Link } from "react-router-dom";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";
import * as searchActions from "../../actions/searchActions";
import * as userActions from "../../actions/userActions";

import "./Header.css";
import logo from "../../images/logoHeader.png";

/**
 * <div className="header-overlay"> - Just to give full width purple bar.
 * <div className="header__logo__mobile"> - Only shown when less than 800px
 **/
class Header extends Component {
  render() {
    const { searchState, storesState, userState, searchActions } = this.props;

    return (
      <div className="header-overlay">
        <div className="header">
          <div className="header__logo">
            <Link to="/" className="router-link-reset">
              <img src={logo} alt="RetailMeNot" className="header__logo__img" />
            </Link>
            <div className="header__logo__mobile">
              <MobileMenu user={userState} actions={this.props.userActions}/>
            </div>
          </div>
          <div className="header__search">
            <Search
              search={searchState}
              stores={storesState}
              actions={searchActions}
            />
          </div>
          <div className="header__login">
            <Login user={userState} actions={this.props.userActions}/>
          </div>
          <div className="header__menu">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

// Specifying which parts of states we want from redux storage
const mapStateToProps = state => {
  return {
    searchState: state.search,
    storesState: state.stores,
    userState: state.user
  };
};

// Specifying which actions. In here we simply say add all actions using bindActionCreators()
const mapDispatchToProps = dispatch => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};

// connect - Injecting Redux State, Actions.
// withRouter - Inject histrory object from Router.

export default connect(mapStateToProps, mapDispatchToProps)(Header);
