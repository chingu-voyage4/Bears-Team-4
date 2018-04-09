/**
 * This compoent render only Small Logo + Deal Description
 */

import React, { Component } from "react";

import CouponModel from "../../../Common/Coupon/CouponModel/CouponModel";

import "./TrendingItemSmall.css";

class TrendingItemSmall extends Component {
  render() {
    const { storeId, description } = this.props.item;

    // Specify how to render TrendingItemSmall
    const modelInitial = (
      <div className="trending-item-small">
        <img
          className="trending-item-small__logo-img"
          alt=""
          src={storeId.logoUrl}
        />
        <div className="trending-item-small__description">
          {description.substr(0, 100) + " ..."}
        </div>
      </div>
    );

    return <CouponModel coupon={this.props.item} trigger={modelInitial} redirect={false}/>;
  }
}

export default TrendingItemSmall;
