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
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import "./Signup.css";

const TrendingCard = props => (
	<MuiThemeProvider>
		<Row className="show-grid signup">
			<Col sm={12} md={6}>
				<LeftSection />
			</Col>
			<Col sm={12} md={6}>
				<RightSection />
			</Col>
		</Row>
	</MuiThemeProvider>
);

export default TrendingCard;
