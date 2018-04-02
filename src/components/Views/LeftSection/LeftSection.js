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
                <p>50 offers available</p>
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

const ImageLogo = props => (
    <div className="image-logo">
        <Image src={logo} rounded />
    </div>
);

function CheckBoxCoupon(props) {
    return (
        <Checkbox className="input-checkbox-label">
            <label className="checkbox-title">{props.title}</label>
        </Checkbox>
    );
}

function CheckBoxCouponList(props) {
    const ListItems = props.titles.map(checkTitle => (
        <CheckBoxCoupon title={checkTitle.title} />
    ));
    return <div>{ListItems}</div>;
}

const CouponType = props => (
    <div className="coupon-type">
        <h4>Coupon Type</h4>
        <CheckBoxCouponList titles={props.titles} />
    </div>
);

const About = props => (
    <div className="about">
        <h4>About {props.titles}</h4>
        <p className="about-content">{props.description}</p>
    </div>
);

function TopOffers(props){
    const TopDealsList = props.deals.map(dealTitle => (
        <li>{dealTitle.deal}</li>
    ));
    return (
        <div className="top-offers">
            <h2>Today's {props.titles} Top Offers</h2>
            <ul>
                {TopDealsList}
            </ul>
        </div>
    );
}

const Stats = props => (
    <div className="stats">
        <table>
            <StatsRow title="Total Offers:" data="" />
            <StatsRow title="Coupon Codes:" data="" />
            <StatsRow title="Best Discount:" data="" />
            <StatsRow title="Average Savings:" data="" />
        </table>
    </div>
);

const StatsRow = props => (
    <tr>
        <td>{props.title}</td>
        <td>{props.data}</td>
    </tr>
);

export default LeftSection;
