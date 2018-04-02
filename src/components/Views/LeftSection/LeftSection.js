/**
    This component renders the left section of the view page, containing the logo, checkboxes, top offers and stats.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Checkbox } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "./thumbnail.jpg";
import "./LeftSection.css";

class LeftSection extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const { trendingItems, coupons, stores } = this.props;
        return (
            <div className="left-section">
                <ImageLogo />
                <p>{this.props.json.stats[0].data} offers available</p>
                <CouponType titles={this.props.json.checkBoxTitle} />
                <About
                    titles={this.props.json.title}
                    description={this.props.json.aboutUs}
                />
                <TopOffers
                    titles={this.props.json.title}
                    deals={this.props.json.todaysDeal}
                />
                <Stats stats={this.props.json.stats} />
            </div>
        );
    }
}

//Renders the image logo
const ImageLogo = props => (
    <div className="image-logo">
        <Image src={logo} rounded />
    </div>
);


//Renders the Checkbox Coupon
function CheckBoxCoupon(props) {
    return (
        <Checkbox className="input-checkbox-label">
            <label className="checkbox-title">{props.title}</label>
        </Checkbox>
    );
}

//Renders all checkbox coupon
function CheckBoxCouponList(props) {
    const ListItems = props.titles.map(checkTitle => (
        <CheckBoxCoupon title={checkTitle.title} />
    ));
    return <div>{ListItems}</div>;
}

//Component that contains the coupons
const CouponType = props => (
    <div className="coupon-type">
        <h4>Coupon Type</h4>
        <CheckBoxCouponList titles={props.titles} />
    </div>
);

//Renders the about section
const About = props => (
    <div className="about">
        <h4>About {props.titles}</h4>
        <p className="about-content">{props.description}</p>
    </div>
);

//Lists the top offers
function TopOffers(props) {
    const TopDealsList = props.deals.map(dealTitle => (
        <li>{dealTitle.deal}</li>
    ));
    return (
        <div className="top-offers">
            <h2>Today's {props.titles} Top Offers</h2>
            <ul>{TopDealsList}</ul>
        </div>
    );
}

//Returns all the stats to Stats
function StatsList(props) {
    const Stats = props.stats.map(stat => (
        <StatsRow title={stat.title} data={stat.data} />
    ));
    return <div>{Stats}</div>;
}

//Main Component that renders stats
function Stats(props) {
    return (
        <div className="stats">
            <StatsList stats={props.stats} />
        </div>
    );
}

//Renders each row of stats
const StatsRow = props => (
    <Row>
        <Col md={6}>{props.title}</Col>
        <Col mdOffset={2} md={4} className="right-align">
            {props.data}
        </Col>
    </Row>
);

export default LeftSection;
