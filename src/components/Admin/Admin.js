import React, { Component } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import "./Admin.css";

//demo data 
const section1 = {
	newCoupons:[{
		StoreWebsite:"Udemy",
		OfferType:"Online Code",
		Code:"AJ3ERT",
		DiscountDescription:"It is demo offer",
		ExpirationDate:"04/22/2028"
	},
	{
		StoreWebsite:"Park Avenue",
		OfferType:"In-Store Coupon",
		Code:"SGJU77",
		DiscountDescription:"It is another demo offer",
		ExpirationDate:"01/14/2021"
	},
	{
		StoreWebsite:"Amazon",
		OfferType:"Online Sale",
		Code:"TYE45P",
		DiscountDescription:"It is another demo offer",
		ExpirationDate:"07/08/2020"
	}]
};

//Main Class Admin that would be rendered
class Admin extends Component {
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

//Renders the header row of Table Header
class TableHeader extends Component {
	render() {
		return (
			<thead>
				<tr>
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

//Renders both action button-approve and reject
const ActionButton = props => {
	const buttonStyle = props.text === "Approve" ? "success" : "danger";
	return <Button bsStyle={buttonStyle}>{props.text}</Button>;
};

//Renders each row of Table
class TableRow extends Component {
	render() {
		console.log(this.props);
		return (
			<tr>
				<td>{this.props.StoreWebsite}</td>
				<td>{this.props.OfferType}</td>
				<td>{this.props.Code}</td>
				<td>{this.props.DiscountDescription}</td>
				<td>{this.props.ExpirationDate}</td>
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

//Class that returns the main Table 
class ApproveTable extends Component {
	render() {
		const listRows=section1.newCoupons.map((section,index)=>
		<TableRow StoreWebsite={section.StoreWebsite} OfferType={section.OfferType} Code={section.Code} DiscountDescription={section.DiscountDescription} ExpirationDate={section.ExpirationDate}/>		
	);
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
					{listRows}
				</tbody>
			</Table>
		);
	}
}

// Binding stores states and actions to our compoent's props
export default Admin;
