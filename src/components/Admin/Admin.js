import { Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "react-bootstrap";
import TopOffers from "../MainPage/TopOffers/TopOffers";
import * as couponActions from "../../actions/couponActions";
import * as userActions from "../../actions/userActions";
import "./Admin.css";

class Admin extends Component {
	componentDidMount() {
		this.props.couponActions.FetchTrendingAndTopOffers();
		this.props.userActions.GetUserLocation();
	}
	render() {
		const { coupons } = this.props;
		return (
			<div className="Admin">
				<Row>
					<h2 className="text-center">Coupon Validation Space</h2>
				</Row>
				<Row>
					<Col sm={2} />
					<Col sm={8}>
						<TopOffers coupons={coupons} />
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
		coupons: state.coupons
	};
};

// Specifying which actions from store we want as props
const mapActionsToProps = dispatch => {
	return {
		couponActions: bindActionCreators(couponActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch)
	};
};

// Binding stores states and actions to our compoent's props
export default connect(mapStateToProps, mapActionsToProps)(Admin);
