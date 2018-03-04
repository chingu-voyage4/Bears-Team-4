import React, { Component } from "react";
import "./TopOffers.css";

import TopOffersItem from "./TopOffersItem/TopOffersItem";

class TopOffers extends Component {
  render() {
    return (
      <div className="topOffers">
        <div className="topOffers__title">Top Offers</div>
        <TopOffersItem />
        <TopOffersItem />
        <TopOffersItem />
      </div>
    );
  }
}

export default TopOffers;
