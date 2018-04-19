import React, { Component } from "react";
import { Input, Label, Menu, Dropdown, Icon, Grid } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";

import ApproveCouponsPage from "./ApproveCouponsPage/ApproveCouponsPage";

import "./AdminPage.css";

class AdminPage extends Component {
  state = { activeItem: "inbox" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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
                  Search
                </Menu.Item>
                <Menu.Item
                  name="add"
                  active={activeItem === "add"}
                  onClick={this.handleItemClick}
                >
                  Add
                </Menu.Item>
                <Menu.Item
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  Remove
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item
              name="browse"
              active={activeItem === "browse"}
              onClick={this.handleItemClick}
            >
              <Icon name="grid layout" />
              Browse
            </Menu.Item>
            <Menu.Item
              as="div"
              name="approveCoupons"
              active={activeItem === "approveCoupons"}
              onClick={this.handleItemClick}
            >
              <Link to="/admin/approveCoupons">Approve Coupons</Link>
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
            path="/admin/approveCoupons"
            exact={true}
            component={ApproveCouponsPage}
          />
        </div>
      </div>
    );
  }
}

export default AdminPage;
