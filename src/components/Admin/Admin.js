import { Route } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Table, Button } from "react-bootstrap";
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
						<ApproveTable />
					</Col>
				</Row>
			</div>
		);
	}
}

class TableHeader extends Component {
	render() {
		return (
			<thead>
				<tr>
					<th>#</th>
					<th>Store Website</th>
					<th>Offer Type</th>
					<th>Code</th>
					<th>Discount Description</th>
					<th>Expiration Date</th>
					<th>Approve</th>
					<th>Reject</th>
				</tr>
			</thead>
		);
	}
}
const ActionButton = props => {
	const buttonStyle = props.text === "Approve" ? "success" : "danger";
	return <Button bsStyle={buttonStyle}>{props.text}</Button>;
};
class TableRow extends Component {
	render() {
		return (
			<tr>
				<td>1</td>
				<td>Udemy</td>
				<td>Online Code</td>
				<td>Code</td>
				<td>Discount Description</td>
				<td>Expiration Date</td>
				<td>
					<ActionButton text="Approve" />
				</td>
				<td>
					<ActionButton text="Reject" />
				</td>
			</tr>
		);
	}
}
class ApproveTable extends Component {
	render() {
		return (
			<Table
				striped
				bordered
				condensed
				hover
				responsive
				className="table-approve text-center"
			>
				<TableHeader />
				<tbody>
					<TableRow />
					<TableRow />
					<TableRow />
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
