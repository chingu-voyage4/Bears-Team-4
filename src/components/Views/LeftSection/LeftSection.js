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
    render() {
        const { trendingItems, coupons, stores } = this.props;
        return (
            <div className="left-section">
                <ImageLogo />
                <p>50 offers available</p>
                <CouponType />
                <About />
                <Stats />
            </div>
        );
    }
}

const ImageLogo = props => (
    <div className="image-logo">
        <Image src={logo} rounded />
    </div>
);

const CouponType = props => (
    <div className="coupon-type">
        <h4>Coupon Type</h4>
        <CheckBoxCoupon title="Coupon Code" />
        <CheckBoxCoupon title="Online Sales" />
    </div>
);

const CheckBoxCoupon = props => (
    <Checkbox className="input-checkbox-label">
        <label className="checkbox-title">{props.title}</label>
    </Checkbox>
);

const About = props => (
    <div className="about">
        <h4>About Udemy</h4>
        <p className="about-content">
            Udemy offers a platform to take and build online courses on any
            subject. The course categories include academic courses, business
            courses, professional courses, creative and performing arts, health
            and fitness, language courses, lifestyle, music, technology among
            many others.
        </p>
        <TopOffers />
    </div>
);

const TopOffers = props => (
    <div className="top-offers">
        <h2>Today's Udemy Top Offers</h2>
        <ul>
            <li>3 Courses Or More for $9.99</li>
            <li>95% Off Ethical Hacking With Android Fast-Track Course</li>
        </ul>
    </div>
);

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
