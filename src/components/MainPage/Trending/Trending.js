/**
 * This component render trending top deales in two parts.
 *
 * upper part (.trending__bigGrid) show trending deals using <TrendingBigItem>.
 * below part (.trending__smallGrid) show trending deals using <TrendingSmallItem>. Below part is
 * get hided when hit less than 800px
 *
 * <TrendingBigItem> - Big Product Picture + Small Logo + Deal Description + Company Name
 * <TrendingBigSmall> -  Logo + Deal Description
 */

import React, { Component } from "react";

import TrendingItemBig from "./TrendingItemBig/TrendingItemBig";
import TrendingItemSmall from "./TrendingItemSmall/TrendingItemSmall";

import "./Trending.css";

class Trending extends Component {
  render() {
    const { coupons, trendingDeals } = this.props.coupons;

    // Specifying which items are shown big and small.
    const trendingItemsBig = trendingDeals.slice(0, 3);
    const trendingItemsSmall = trendingDeals.slice(3);

    return (
      <div className="trending">
        <div className="trending__title">
          Shop Today's Trending Deals and Save Big
        </div>
        {/* Renderning Big Grid */}
        <div className="trending__big-grid">
          {trendingItemsBig.map((item, i) => {
            return <TrendingItemBig key={i} item={coupons[item]} />;
          })}
        </div>
        {/* Renderning Small Grid */}
        <div className="trending__small-grid">
          {trendingItemsSmall.map((item, i) => {
            return <TrendingItemSmall key={i} item={coupons[item]} />;
          })}
        </div>
      </div>
    );
  }
}

export default Trending;
