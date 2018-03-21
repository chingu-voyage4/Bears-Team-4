/**
 * This comopent render TrendingDeals + TopOffer + Populars + Sucribe.
 *
 * In here we connect with redux storage and get inject needed states and action as props.
 * Then we pass relevent props to child components.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";
import {Button} from "react-bootstrap";
import Coupon from "../Common/Coupon/Coupon";
import "./SearchPage.css";

class SearchPage extends Component {
  render() {
    const { trendingItems, coupons, stores } = this.props;
    return (
      <div className="mainPage">
       <div className="View-Page">
        <div className="view-title">
            <p>Udemy Coupon Codes</p>
        </div>
        <div className="sortBy">
            <SortButton title="Popularity" />
            <SortButton title="Newest" />
            <SortButton title="Ending Soon" />
        </div>
        <div className="coupon">
            <Coupon coupon={coupons[0]} store={stores} />
        </div>
     </div>
      </div>
    );
  }
}

const SortButton=props=>(
    <Button bsStyle="primary" bsSize="large" block>
      {props.title}
    </Button>
);

// Specifying which state from store we want as props
const mapStateToProps = state => {
  return {
    stores: state.stores,
    coupons: state.coupons,
    trendingItems: state.trending
  };
};

// Binding stores states and actions to our compoent's props
export default connect(mapStateToProps)(SearchPage);
