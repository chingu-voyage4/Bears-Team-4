/**
 * This comopent render TrendingDeals + TopOffer + Populars + Sucribe.
 *
 * In here we connect with redux storage and get inject needed states and action as props.
 * Then we pass relevent props to child components.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";

import Populars from "./Populars/Populars";
import Subscribe from "./Subscribe/Subscribe";
import TopOffers from "./TopOffers/TopOffers";
import TrendingDeals from "./Trending/Trending";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    const { trendingItems, coupons, stores } = this.props;

    return (
      <div className="mainPage">
        <TrendingDeals trendingItems={trendingItems} />
        <TopOffers coupons={coupons} stores={stores} />
        <Populars />
        <Subscribe />
      </div>
    );
  }
}

// Specifying which state from store we want as props
const mapStateToProps = state => {
  return {
    stores: state.stores,
    coupons: state.coupons,
    trendingItems: state.trending
  };
};

// Binding stores states and actions to our compoent's props
export default connect(mapStateToProps)(MainPage);
