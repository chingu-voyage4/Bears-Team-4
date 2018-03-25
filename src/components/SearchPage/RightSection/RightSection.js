/**
 * This comopent render TrendingDeals + TopOffer + Populars + Sucribe.
 *
 * In here we connect with redux storage and get inject needed states and action as props.
 * Then we pass relevent props to child components.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Checkbox } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Coupon from "../../Common/Coupon/Coupon";
import "./RightSection.css";

class RightSection extends Component {
    render() {
        const { coupons, stores } = this.props;
        return (
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

export default RightSection;
