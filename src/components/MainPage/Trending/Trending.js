import React, { Component } from "react";
import "./Trending.css";

import TrendingItemBig from "./TrendingItemBig/TrendingItemBig";
import TrendingItemSmall from "./TrendingItemSmall/TrendingItemSmall";

class Trending extends Component {
  render() {
    return (
      <div className="trending">
        <div className="trending__title">
          Shop Today's Trending Deals and Save Big
        </div>
        <div className="trending__bigGrid">
          <TrendingItemBig />
          <TrendingItemBig />
          <TrendingItemBig />
        </div>
        <div className="trending__smallGrid">
          <TrendingItemSmall />
          <TrendingItemSmall />
          <TrendingItemSmall />
          <TrendingItemSmall />
          <TrendingItemSmall />
          <TrendingItemSmall />
        </div>
      </div>
    );
  }
}

export default Trending;
