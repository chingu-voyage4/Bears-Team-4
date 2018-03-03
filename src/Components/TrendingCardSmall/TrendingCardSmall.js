import React, { Component } from "react";
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from "material-ui/Card";
import { Col } from "react-bootstrap";
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./TrendingCardSmall.css";

const style = {
	borderRadius: 0
};
const TrendingCard = props => (
	<Col xs={3} md={2} className="trending-card">
		<Card>
			<img
				src="../../images/save.jpg"
				alt=""
				className="trending-small-image"
			/>
			<CardText>{props.text}</CardText>
		</Card>
	</Col>
);

export default TrendingCard;
