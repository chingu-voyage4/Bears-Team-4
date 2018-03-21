import React, { Component } from "react";
import { connect } from "react-redux";
import Coupon from "../Common/Coupon/Coupon";
import {Button} from "react-bootstrap";
import "./SearchPage.css";

class SearchPage extends Component {
  render() {
    const { trendingItems, coupons, stores } = this.props;
    return (
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
     		<Coupon coupons={coupons} stores={stores} />
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

export default connect(mapStateToProps)(SearchPage) ;
