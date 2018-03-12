/**
 * This compoents render top coupons using <Coupon> component.
 */

import React, { Component } from "react";

import Coupon from "../../Common/Coupon/Coupon";

import "./TopOffers.css";

class TopOffers extends Component {
  render() {
    const {coupons, stores } = this.props;

    return (
      <div className="topOffers">
        <div className="topOffers__title">Top Offers</div>
        <Coupon coupon={coupons[0]} store={stores.stores[0]} />
        {/* <Coupon />
        <Coupon /> */}
      </div>
    );
  }
}

export default TopOffers;
