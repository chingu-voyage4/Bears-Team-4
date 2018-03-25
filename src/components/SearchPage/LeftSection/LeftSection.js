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
        <h2>Coupon Type</h2>
        <CheckBoxCoupon title="Coupon Code"/>
        <CheckBoxCoupon title="Online Sales"/>
   </div>
);

const CheckBoxCoupon=props=>(
    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
);

const About = props => (
   <div className="about">
        <h2>About Udemy</h2>
        <p className="about-content">Udemy offers a platform to take and build online courses on any subject. The course categories include academic courses, business courses, professional courses, creative and performing arts, health and fitness, language courses, lifestyle, music, technology among many others.</p>
        <TopOffers />
   </div>
);

const TopOffers=props=>(
    <div className="top-offers">
    <h2>Today's Udemy Top Offers</h2>
    <ul>
    <li>3 Courses Or More for $9.99</li>
    <li>95% Off Ethical Hacking With Android Fast-Track Course</li>
    </ul>
    </div>
);

const Stats=props=>(
    <div className="stats">
        <ul>
            <li>Total Offers:</li>
            <li>Coupon Codes:</li>
            <li>Best Discount:</li>
            <li>Average Savings:</li>
        </ul>
    </div>
);

export default LeftSection;
