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
                <div className="LeftSection">
                    <LeftSection />
                </div>
                <div className="RightSection">
                    <div className="View-Page">
                        <Row>
                            <div className="view-title">
                                <h1 className="text-center">
                                    Udemy Coupon Codes
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <div className="sortBy">
                                <Col mdOffset={1} md={3}>
                                    <SortButton title="Popularity" />
                                </Col>
                                <Col mdOffset={1} md={3}>
                                    <SortButton title="Newest" />
                                </Col>
                                <Col mdOffset={1} md={3}>
                                    <SortButton title="Ending Soon" />
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <div className="coupon">
                                <Col smOffset={2}>
                                    <Coupon
                                        coupon={coupons[0]}
                                        store={stores}
                                    />
                                </Col>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

const SortButton = props => (
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
