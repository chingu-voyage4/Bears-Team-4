/**
 * This compoents render top coupons using <Coupon> component.
 */

import React, { Component } from "react";

import Coupon from "../../Common/Coupon/Coupon";

import "./TopOffers.css";

class TopOffers extends Component {
  render() {
    const { coupons } = this.props;
    return (
      <div className="topOffers">
        <div className="topOffers__title">Top Offers</div>
        {coupons.topOffers.map(i => {
          return <Coupon key={i._id} coupon={coupons.coupons[i._id]} />;
        })}
      </div>
    );
  }
}

export default TopOffers;
