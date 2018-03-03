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
		<Row className="show-grid">
			<Col xs={6} md={3} className="trending-card" mdOffset={1}>
				<Card>
					<CardMedia
						overlay={
							<CardHeader
								title={<div className="title">{props.title}</div>}
								subtitle={props.subtitle}
								avatar={
									<Avatar
										src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
										size={50}
										style={style}
									/>
								}
							/>
						}
					>
						<img
							src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
							alt=""
							className="trending-image"
						/>
					</CardMedia>
				</Card>
			</Col>
			<Col xs={6} md={3}>
				<Card>
					<CardMedia
						overlay={
							<CardHeader
								title={<div className="title">{props.title}</div>}
								subtitle={props.subtitle}
								avatar={
									<Avatar
										src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
										size={50}
										style={style}
									/>
								}
							/>
						}
					>
						<img
							src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
							alt=""
							className="trending-image"
						/>
					</CardMedia>
				</Card>
			</Col>
			<Col xsHidden md={3}>
				<Card>
					<CardMedia
						overlay={
							<CardHeader
								title={<div className="title">{props.title}</div>}
								subtitle={props.subtitle}
								avatar={
									<Avatar
										src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
										size={50}
										style={style}
									/>
								}
							/>
						}
					>
						<img
							src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
							alt=""
							className="trending-image"
						/>
					</CardMedia>
				</Card>
			</Col>
		</Row>
	</MuiThemeProvider>
);

export default TrendingCard;
