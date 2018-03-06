import React, { Component } from "react";
import "./TrendingItemBig.css";

class TrendingItemBig extends Component {
  render() {
    return (
      <div className="trendingItemBig">
        <img
          className="trendingItemBig__productImg"
          alt=""
          src="https://mediaservice.retailmenot.com/image/MADNUSZMMRALJJUMURSFVYISKI?width=350"
        />
        <div className="trendingItemBig__details">
          <img
            className="trendingItemBig__companyImg"
            alt=""
            src="https://www.retailmenot.com/thumbs/logos/m/lordandtaylor.com-coupons.jpg?versionId=ZxTkF4sD8D3n2J_3ryiZUedTvEUhBkUC"
          />
          <div className="trendingItemBig__Descriptions">
            <div className="trendingItemBig__dealDescription">
              Extre 25% Off
            </div>
            <div className="trendingItemBig__companyName">
              Saks Fifth Avenue Code
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingItemBig;
