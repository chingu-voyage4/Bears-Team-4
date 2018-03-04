import React, { Component } from "react";
import "./TrendingItemSmall.css";

class TrendingItemSmall extends Component {
  render() {
    return (
      <div className="TrendingItemSmall">
        <img
          className="TrendingItemSmall__companyImg"
          src="https://www.retailmenot.com/thumbs/logos/m/lordandtaylor.com-coupons.jpg?versionId=ZxTkF4sD8D3n2J_3ryiZUedTvEUhBkUC"
        />
        <div className="TrendingItemSmall__Descriptions">
          <div className="TrendingItemSmall__dealDescription">
            Up to 30% Off With Amazon Coupon Codes And Promos
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingItemSmall;
