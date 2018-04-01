/**
 * This component render CouponBox with details, comments, like,.....
 *
 * below "coupon__moreDetails" and right "coupon__buttons" part get hidden when hit <800px
 */

import React, { Component } from "react";

import CouponDetails from "./CouponDetails/CouponDetails";
import * as helpers from "../../../helpers/helperFunctions";

import "./Coupon.css";

class Coupon extends Component {
  render() {
    const { coupon } = this.props;

    return (
      <div className="coupon">
        <div className="coupon__store-image">
          <img alt={coupon.storeId.name} src={coupon.storeId.logoUrl} />
        </div>
        <div className="coupon__details">
          <div className="coupon__details__type">
            {coupon.kind.toUpperCase()}
          </div>
          <div className="coupon__details__store">{coupon.storeId.name}</div>
          <div className="coupon__details__description">
            {helpers.limitCharacters(coupon.description, 50)}
          </div>
        </div>
        <div className="coupon__buttons">
          <div className="saveButton">
            <i className="far fa-star" /> Save
          </div>
          <div className="showButton">
            {coupon.kind === "deal" ? "Get Deal" : "Show Code"}
          </div>
        </div>
        <div className="coupon__moreDetails">
          <CouponDetails coupon={coupon} />
        </div>
      </div>
    );
  }
}

export default Coupon;
