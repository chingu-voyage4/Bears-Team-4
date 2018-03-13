import React, { Component } from "react";
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from "material-ui/Card";
import { Row, Col } from 'react-bootstrap';
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const TrendingCard = props => (
	<MuiThemeProvider>
		<LeftSection />
		<RightSection />
	</MuiThemeProvider>
);

export default TrendingCard;
