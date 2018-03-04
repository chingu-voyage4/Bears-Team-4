import React, { Component } from "react";
import "./TrendingItemBig.css";

class TrendingItemBig extends Component {
  render() {
    return (
      <div className="TrendingItemBig">
        <img
          className="TrendingItemBig__productImg"
          src="https://mediaservice.retailmenot.com/image/MADNUSZMMRALJJUMURSFVYISKI?width=350"
        />
        <div className="TrendingItemBig__details">
          <img
            className="TrendingItemBig__companyImg"
            src="https://www.retailmenot.com/thumbs/logos/m/lordandtaylor.com-coupons.jpg?versionId=ZxTkF4sD8D3n2J_3ryiZUedTvEUhBkUC"
          />
          <div className="TrendingItemBig__Descriptions">
            <div className="TrendingItemBig__dealDescription">
              Extre 25% Off
            </div>
            <div className="TrendingItemBig__companyName">
              Saks Fifth Avenue Code
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingItemBig;
