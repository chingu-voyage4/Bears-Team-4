/**
 * This comopent render TrendingDeals + TopOffer + Populars + Sucribe.
 *
 * In here we connect with redux storage and get inject needed states and action as props.
 * Then we pass relevent props to child components.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Coupon from "../Common/Coupon/Coupon";
import LeftSection from "./LeftSection/LeftSection";
import "./SearchPage.css";

class SearchPage extends Component {
    render() {
        const { trendingItems, coupons, stores } = this.props;
        return (
            <div className="mainPage">
                <Row>
                    <Col md={3}>
                        <div className="LeftSection">
                            <LeftSection />
                        </div>
                    </Col>
                    <Col mdOffset={1} md={8}>
                        <div className="RightSection">
                            <div className="View-Page View-Group">
                                <Row>
                                    <div className="view-title">
                                        <h1 className="text-center">
                                            Udemy Coupon Codes
                                        </h1>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="sortBy View-Group">
                                    	<Col md={2} className="sortBy-title">
                                    		Sort by:
                                    	</Col>		
                                        <Col md={3}>
                                            <SortButton title="Popularity" />
                                        </Col>
                                        <Col md={3}>
                                            <SortButton title="Newest" />
                                        </Col>
                                        <Col md={3}>
                                            <SortButton title="Ending Soon" />
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="coupon View-Group">
                                            <Coupon
                                                coupon={coupons[0]}
                                                store={stores}
                                            />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

class CouponList extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render() {
		return (
			<div></div>
		);
	}
}

const SortButton = props => (
    <Button bsSize="small" block className="sort-button">
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
