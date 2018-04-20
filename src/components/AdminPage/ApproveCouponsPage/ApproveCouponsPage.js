import React, { Component } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

import axios from "../../../actions/axiosInstances"; // Pre configured axios instance

import CouponForm from "./CouponForm/CouponForm";
import CouponItem from "./CouponItem/CouponItem";
import "./ApproveCouponsPage.css";

class ApproveCouponsPage extends Component {
  state = {
    activePage: "table",
    activeCoupon: {
      expiredAt: "",
      storeId: {
        name: ""
      }
    },
    unapprovedCoupons: [],
    error: false
  };

  componentWillMount() {
    axios
      .get("coupon/unapprovedCoupons", { withCredentials: true }) // For cross domain cookies must use "withCredentials: true"
      .then(r => this.setState({ unapprovedCoupons: r.data }))
      .catch(err => this.setState({ error: true }));
  }

  render() {
    const editFormClassNames =
      "ApproveCouponsPage__editForm ApproveCouponsPage_" +
      (this.state.activePage === "editForm" ? "show" : "hide");
    const tableClassNames =
      "ApproveCouponsPage__table ApproveCouponsPage_" +
      (this.state.activePage === "table" ? "show" : "hide");

    const { unapprovedCoupons } = this.state;

    return (
      <div className="ApproveCouponsPage">
        <div className={editFormClassNames}>
          <h1>
            {this.state.activeCoupon.storeId.name + " - Coupon/Deal"}
            <Button
              icon="reply"
              color="olive"
              floated="right"
              onClick={() => {
                this.setState({ activePage: "table" });
              }}
            />
          </h1>

          <CouponForm
            submitPath="/cat/dog"
            initialValues={{
              ...this.state.activeCoupon,
              store: this.state.activeCoupon.storeId.name,
              categories: this.state.activeCoupon.category,
              expiredAt: new Date(
                this.state.activeCoupon.expiredAt
              ).toLocaleDateString()
            }}
          />
        </div>
        <div className={tableClassNames}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Store Name</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Exp. Date</Table.HeaderCell>
                <Table.HeaderCell>Tasks</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {unapprovedCoupons.map((coupon, id) => {
                return <CouponItem mainState={this} coupon={coupon} />;
              })}
            </Table.Body>

            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell colSpan="5">
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    primary
                    size="small"
                  >
                    <Icon name="user" /> <Link to="/couponSubmit">Add Coupon</Link>
                  </Button>

                  <Button icon size="small" color="green">
                    <Icon name="check circle outline" /> Approve All
                  </Button>
                  <Button icon size="small" color="red">
                    <Icon name="trash outline" /> Delete All
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
    );
  }
}

export default ApproveCouponsPage;
