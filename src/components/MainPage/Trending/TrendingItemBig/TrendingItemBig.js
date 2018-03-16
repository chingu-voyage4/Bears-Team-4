/**
 * This compoent render Big Product Picture and at bottom Small Logo + Deal Description + Company Name
 */

import React, { Component } from "react";

import "./TrendingItemBig.css";

class TrendingItemBig extends Component {
  render() {
    const {
      productImg,
      logoImg,
      dealDescription,
      companyName
    } = this.props.item;
    return (
      <div className="trending-item-big">
        <img
          className="trending-item-big__product-img"
          alt=""
          src={productImg}
        />
        <div className="trending-item-big__details">
          <img className="details__logo-img" alt="" src={logoImg} />
          {/* Bottom box */}
          <div className="details__info">
            <div className="details__info__deal-description">
              {dealDescription}
            </div>
            <div className="details__info___company-name">{companyName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingItemBig;
