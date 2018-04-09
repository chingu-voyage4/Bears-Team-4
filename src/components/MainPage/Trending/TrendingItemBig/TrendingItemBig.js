/**
 * This compoent render Big Product Picture and at bottom Small Logo + Deal Description + Company Name
 */

import React, { Component } from "react";

import CouponModel from "../../../Common/Coupon/CouponModel/CouponModel";

import "./TrendingItemBig.css";

class TrendingItemBig extends Component {
  render() {
    const { imgUrl, storeId, description } = this.props.item;

    // Specify how to render TrendingItemBig
    const modelInitial = (
      <div className="trending-item-big">
        <img className="trending-item-big__product-img" alt="" src={imgUrl} />
        <div className="trending-item-big__details">
          <img className="details__logo-img" alt="" src={storeId.logoUrl} />
          {/* Bottom box - Store Details */}
          <div className="details__info">
            <div className="details__info__deal-description">
              {description.substr(0, 75) + " ..."}
            </div>
            <div className="details__info___company-name">{storeId.name}</div>
          </div>
        </div>
      </div>
    );

    return <CouponModel coupon={this.props.item} trigger={modelInitial} redirect={false} />;
  }
}

export default TrendingItemBig;
