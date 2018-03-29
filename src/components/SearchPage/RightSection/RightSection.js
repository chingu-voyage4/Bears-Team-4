/**
 * This comopent render TrendingDeals + TopOffer + Populars + Sucribe.
 *
 * In here we connect with redux storage and get inject needed states and action as props.
 * Then we pass relevent props to child components.
 **/

import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Checkbox } from "react-bootstrap";
import {
	Button,
	ButtonToolbar,
	ToggleButton,
	ToggleButtonGroup
} from "react-bootstrap";
import Coupon from "../../Common/Coupon/Coupon";
import "./RightSection.css";

class RightSection extends Component {
	render() {
		const buttonTitle = ["Popularity", "Newest", "Ending Soon"];
		let id = -1;

		function getId() {
			id = id + 1;
			return id;
		}
		const ListItem = buttonTitle.map(title => (
			<Col md={2}>
				<SortButton id={getId()} title={title} />
			</Col>
		));
		const { coupons, stores } = this.props;
		return (
			<div className="RightSection">
				<div className="View-Page View-Group">
					<Row>
						<div className="view-title">
							<h1 className="text-center">Udemy Coupon Codes</h1>
						</div>
					</Row>
					<Row>
						<div className="sortBy View-Group">
							<Col md={2} className="sortBy-title">
								Sort by:
							</Col>
							{ListItem}
						</div>
					</Row>
					<Row>
						<div className="coupon View-Group">
							<Coupon coupon={coupons[0]} store={stores} />
						</div>
					</Row>
				</div>
			</div>
		);
	}
}

class CouponList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <div />;
	}
}

const SortButton = props => {
	const isActive = props.id == 0 ? true : false;
	const bsStyle=props.id==0?"primary":"default";
	return (
		<Button bsStyle={bsStyle} bsSize="xsmall" block className="sort-button">
			{props.title}
		</Button>
	);
};

export default RightSection;
