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
import "./TrendingCard.css";

const style = {
	borderRadius: 0
};
const TrendingCard = props => (
	<MuiThemeProvider>
			<Col sm={4} md={3} className="trending-card">
				<Card>
					<CardMedia
						overlay={
							<CardHeader
								title={<div className="title">{props.title}</div>}
								subtitle={props.subtitle}
								avatar={
									<Avatar
										src={props.imagesrc}
										size={50}
										style={style}
									/>
								}
							/>
						}
					>
						<img
							src={props.mainImageSrc}
							alt=""
							className="trending-image"
						/>
					</CardMedia>
				</Card>
			</Col>
	</MuiThemeProvider>
);

export default TrendingCard;
