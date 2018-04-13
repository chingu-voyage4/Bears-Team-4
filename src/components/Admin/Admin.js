import { Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Table } from "react-bootstrap";
import TopOffers from "../MainPage/TopOffers/TopOffers";
import * as couponActions from "../../actions/couponActions";
import * as userActions from "../../actions/userActions";
import * as adminActions from "../../actions/adminActions";
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
					<Col smOffset={2} sm={8}>
						<ApproveTable/>
					</Col>
				</Row>
			</div>
		);
	}
}

class ApproveTable extends Component {
	render() {
		return (
			<Table striped bordered condensed hover responsive className="table-approve text-center">
				<thead>
					<tr>
						<th>#</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
				</tbody>
			</Table>
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
		userActions: bindActionCreators(userActions, dispatch),
		adminActions: bindActionCreators(adminActions, dispatch)
	};
};

// Binding stores states and actions to our compoent's props
export default connect(mapStateToProps, mapActionsToProps)(Admin);
