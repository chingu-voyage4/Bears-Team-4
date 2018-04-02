/**
 * This component render the page about search, category and stores that would be listed.
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

const section1 = {
	title: "Udemy",
	checkBoxTitle: [
		{
			title: "Coupon Codes"
		},
		{
			title: "Online Sales"
		}
	],
	aboutUs:
		"Udemy offers a platform to take and build online courses on any subject. The course categories include academic courses, business courses, professional courses, creative and performing arts, health and fitness, language courses, lifestyle, music, technology among many others.",
	todaysDeal: [
		{
			deal: "3 Courses Or More for $9.99"
		},
		{
			deal: "95% Off Ethical Hacking With Android Fast-Track Course"
		}
	],
	stats: [
		
			{
				title:"Total Offers",
				data:"50"
			},
			{
				title:"Coupon Codes",
				data:"46"
			},
			{
				title:"Best Discounts",
				data:"90% off"
			},
			{
				title:"Average Savings",
				data:"$43.43"
			}
		
	]
};

class Views extends Component {
	render() {
		const { trendingItems, coupons, stores } = this.props;
		return (
			<div className="mainPage">
				<Row>
					<Col md={3}>
						<div className="LeftSection">
							<LeftSection json={section1}/>
						</div>
					</Col>
					<Col mdOffset={1} md={8}>
						<RightSection title={section1.title} coupons={coupons} stores={stores} />
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
