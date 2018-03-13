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

const TrendingCard = props => (
	<MuiThemeProvider>
		<Row className="show-grid">
			<Col sm={12} md={6}>
				<LeftSection />
			</Col>
		</Row>
	</MuiThemeProvider>
);

export default TrendingCard;
