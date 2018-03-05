import React, { Component } from "react";
import "./TopOffers.css";

import Coupon from "../Coupon/Coupon";

class TopOffers extends Component {
  render() {
    return (
      <div className="topOffers">
        <div className="topOffers__title">Top Offers</div>
        <Coupon />
        <Coupon />
        <Coupon />
      </div>
    );
  }
}

export default TopOffers;
