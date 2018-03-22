/**
 * This component render CouponBox with details, comments, like,.....
 * 
 * below "coupon__moreDetails" and right "coupon__buttons" part get hidden when hit <800px
 */

import React, { Component } from "react";

import CouponDetails from "./CouponDetails/CouponDetails";

import "./Coupon.css";

class Coupon extends Component {
  render() {
    const { coupon, store } = this.props;
    return (
      <div className="coupon">
        <div className="coupon__store-image">
          <img alt={store.name} src={store.logoImg} />
        </div>
        <div className="coupon__details">
          <div className="coupon__details__type">{coupon.type}</div>
          <div className="coupon__details__store">{store.name}</div>
          <div className="coupon__details__description">{coupon.title}</div>
        </div>
        <div className="coupon__buttons">
          <div className="saveButton">
            <i className="far fa-star" /> Save
          </div>
          <div className="showButton">Show Code</div>
        </div>
        <div className="coupon__moreDetails">
          <CouponDetails coupon={coupon} comments={coupon.comments} />
        </div>
      </div>
    );
  }
}

export default Coupon;
