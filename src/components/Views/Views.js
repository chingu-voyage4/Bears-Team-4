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
import RightSection from "./RightSection/RightSection";
import "./Views.css";

class Views extends Component {
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
                        <RightSection coupons={coupons} stores={stores}/>
                    </Col>
                </Row>
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
export default connect(mapStateToProps)(Views);
