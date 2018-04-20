import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

import axios from "../../../../actions/axiosInstances"; // Pre configured axios instance

class CouponItem extends Component {
  render() {
    const { mainState, coupon } = this.props;
    return (
      <Table.Row className="ApproveCouponsPage__table__row">
        <Table.Cell>{coupon.kind === "deal" ? "Deal" : "Coupon"}</Table.Cell>
        <Table.Cell>{coupon.storeId.name}</Table.Cell>
        <Table.Cell className="ApproveCouponsPage__table__titleCell">
          {coupon.title}
        </Table.Cell>
        <Table.Cell>
          {new Date(coupon.expiredAt).toLocaleDateString()}
        </Table.Cell>
        <Table.Cell className="ApproveCouponsPage__table__tasksCell">
          <Button.Group>
            <Button
              icon
              color="green"
              title="Approve"
              onClick={() => {
                axios
                  .put("coupon/approveCoupon", coupon, {
                    withCredentials: true
                  }) // For cross domain cookies must use "withCredentials: true"
                  .then(r => mainState.setState({ unapprovedCoupons: r.data }))
                  .catch(err => mainState.setState({ error: true }));
              }}
            >
              <Icon name="check circle outline" />
            </Button>
            <Button
              icon
              color="red"
              title="Delete"
              onClick={() => {
                axios
                  .put("coupon/deleteCoupon", coupon, {
                    withCredentials: true
                  }) // For cross domain cookies must use "withCredentials: true"
                  .then(r => mainState.setState({ unapprovedCoupons: r.data }))
                  .catch(err => mainState.setState({ error: true }));
              }}
            >
              <Icon name="trash outline" />
            </Button>
            <Button icon color="blue" title="Edit">
              <Icon
                name="edit"
                onClick={() => {
                  mainState.setState({
                    activePage: "editForm",
                    activeCoupon: coupon
                  });
                }}
              />
            </Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CouponItem;
