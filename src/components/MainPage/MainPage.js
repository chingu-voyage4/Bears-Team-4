/**
 * This comopent render TrendingDeals + TopOffer + Populars + Sucribe.
 *
 * In here we connect with redux storage and get inject needed states and action as props.
 * Then we pass relevent props to child components.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Populars from "./Populars/Populars";
import Subscribe from "./Subscribe/Subscribe";
import TopOffers from "./TopOffers/TopOffers";
import TrendingDeals from "./Trending/Trending";
import * as couponActions from "../../actions/couponActions";
import * as userActions from "../../actions/userActions";
import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.couponActions.FetchTrendingAndTopOffers();
    this.props.userActions.GetUserLocation();
  }

  render() {
    const { coupons } = this.props;

    return (
      <div className="mainPage">
        <TrendingDeals coupons={coupons} />
        <TopOffers coupons={coupons} />
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
    coupons: state.coupons
  };
};

// Specifying which actions from store we want as props
const mapActionsToProps = dispatch => {
  return {
    couponActions: bindActionCreators(couponActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};

// Binding stores states and actions to our compoent's props
export default connect(mapStateToProps, mapActionsToProps)(MainPage);
