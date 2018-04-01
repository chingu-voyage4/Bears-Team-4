/**
 * This compoent render Big Product Picture and at bottom Small Logo + Deal Description + Company Name
 */

import React, { Component } from "react";

import "./TrendingItemBig.css";

class TrendingItemBig extends Component {
  render() {
    const { imgUrl, storeId, description } = this.props.item;
    return (
      <div className="trending-item-big">
        <img className="trending-item-big__product-img" alt="" src={imgUrl} />
        <div className="trending-item-big__details">
          <img className="details__logo-img" alt="" src={storeId.logoUrl} />
          {/* Bottom box - Store Details */}
          <div className="details__info">
            <div className="details__info__deal-description">{description.substr(0,75) + " ..."}</div>
            <div className="details__info___company-name">{storeId.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingItemBig;
