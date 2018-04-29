import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Menu, Dropdown, Icon, Button } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";

import ApproveCouponsPage from "./ApproveCouponsPage/ApproveCouponsPage";

import "./AdminPage.css";

class AdminPage extends Component {
  state = { activeItem: "inbox" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { userState } = this.props;

    if (!userState.authenticated) {
      return (
        <div className="unauthorized">
          <h1>Sorry, Restricted Area </h1>
          <h2>
            Only Regsitered and Admin Users Can Access This Area. <br />
            Please Log In / Sign Up First
          </h2>
          <Button.Group size="massive">
            <Link to="/auth/login">
              <Button icon labelPosition="left" color="blue">
                <Icon name="sign in" />
                Log In
              </Button>
            </Link>
            <Button.Or />
            <Link to="/auth/signup">
              <Button icon labelPosition="left" color="green">
                <Icon name="users" />
                Sign Up
              </Button>
            </Link>
          </Button.Group>
        </div>
      );
    }

    return (
      <div className="adminPage">
        <div className="adminPage__sideBar">
          <Menu vertical className="adminPage__menu">
            <Menu.Item>
              <Input placeholder="Search..." />
            </Menu.Item>

            <Menu.Item>
              Home
              <Menu.Menu>
                <Menu.Item
                  name="search"
                  active={activeItem === "search"}
                  onClick={this.handleItemClick}
                >
                  Coupons
                </Menu.Item>
                <Menu.Item
                  name="add"
                  active={activeItem === "add"}
                  onClick={this.handleItemClick}
                >
                  Stores
                </Menu.Item>
                <Menu.Item
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  Categories
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item
              as="div"
              name="approveCoupons"
              active={activeItem === "approveCoupons"}
              onClick={this.handleItemClick}
            >
              <Link to="/admin/approveCoupons">Approve Coupons</Link>
            </Menu.Item>
            <Menu.Item
              name="browse"
              active={activeItem === "browse"}
              onClick={this.handleItemClick}
            >
              <Icon name="grid layout" />
              Browse
            </Menu.Item>

            <Dropdown item text="More">
              <Dropdown.Menu>
                <Dropdown.Item icon="edit" text="Edit Profile" />
                <Dropdown.Item icon="globe" text="Choose Language" />
                <Dropdown.Item icon="settings" text="Account Settings" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
        <div className="adminPage__content">
          <Route
            path="/admin"
            exact={true}
            component={() => {
              return (<div style={{ textAlign: "center" }}>
                <h1> Welcome To Admin Panel. </h1>
                <h3>
                  {" "}
                  (Yet Only ApproveCoupons Is Implemented. Others Coming Soon){" "}
                </h3>
            </div>)
            }}
          />
          <Route
            path="/admin/approveCoupons"
            exact={true}
            component={ApproveCouponsPage}
          />
        </div>
      </div>
    );
  }
}

// Specifying which parts of states we want from redux storage
const mapStateToProps = state => {
  return {
    userState: state.user
  };
};

export default connect(mapStateToProps)(AdminPage);
