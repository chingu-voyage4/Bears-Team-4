/**
 * This component render CouponBox with details, comments, like,.....
 */

import React, { Component } from "react";

import CouponDetails from "./CouponDetails/CouponDetails";

import "./Coupon.css";

class Coupon extends Component {
  render() {
    return (
      <div className="coupon">
        <div className="coupon__image">
          <img
            alt=""
            src="https://www.retailmenot.com/thumbs/logos/l/internetandtv.att.com-coupons.jpg?versionId=_ODmb35r6kZ28npgXwMvI6Rwq1zHsacE"
          />
        </div>
        <div className="coupon__details">
          <div className="coupon__details__type">Sale</div> -
          <div className="coupon__details__category">Internet</div>
          <div className="coupon__details__offer">
            $400 Reward Card + TV/Internet $65/mo
          </div>
        </div>
        <div className="coupon__buttons">
          <div className="saveButton">
            <i className="far fa-star" /> Save
          </div>
          <div className="showButton">Show Code</div>
        </div>
        <div className="coupon__moreDetails">
          <CouponDetails />
        </div>
      </div>
    );
  }
}

export default Coupon;
