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
		const { coupons, stores } = this.props;
		return (
			<div className="RightSection">
				<div className="View-Page View-Group">
					<Row>
						<div className="view-title">
							<h1 className="text-center">{this.props.title} Coupon Codes</h1>
						</div>
					</Row>
					<Row>
						<div className="sortBy View-Group">
							<Col md={2} className="sortBy-title">
								Sort by:
							</Col>
							<SortButton />
							<Col mdOffset={2} md={2} className="submit-a-coupon">
								<a href="#">Submit a coupon</a>
							</Col>
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

class SortButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeId: 0
		};
		this.changeActiveId = this.changeActiveId.bind(this);
	}
	changeActiveId(event) {
		const {id}=event.target
		this.setState({
			activeId: id
		});
	}
	render() {
		return (
			<div className="sort-button-list">
				<Col md={2}>
				<Button
					bsStyle={this.state.activeId == 0 ? "primary" : "default"}
					bsSize="xsmall"
					block
					className="sort-button"
					id='0'
					onClick={this.changeActiveId}
				>
					Popular
				</Button>
				</Col>
				<Col md={2}>
				<Button
					bsStyle={this.state.activeId == 1 ? "primary" : "default"}
					bsSize="xsmall"
					block
					className="sort-button"
					id='1'
					onClick={this.changeActiveId}
				>
					Newest
				</Button>
				</Col>
				<Col md={2}>
				<Button
					bsStyle={this.state.activeId == 2 ? "primary" : "default"}
					bsSize="xsmall"
					block
					className="sort-button"
					active={this.state.id == 2}
					id='2'
					onClick={this.changeActiveId}
				>
					NewComing
				</Button>
				</Col>
			</div>
		);
	}
}

export default RightSection;
