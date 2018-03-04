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
	boxShadow: 0
};
const TrendingCard = props => (
	<MuiThemeProvider>
	<Col xs={3} md={2} className="trending-small-card">
		<Card className="small-card" style={style}>
			<img
				src={props.imagesrc}
				alt=""
				className="trending-small-image"
			/>
			<CardText><div className="text">{props.text}</div></CardText>
		</Card>
	</Col>
	</MuiThemeProvider>
);

export default TrendingCard;
