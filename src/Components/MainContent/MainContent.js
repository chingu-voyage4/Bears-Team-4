import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Row} from "react-bootstrap";
import "./MainContent.css";
import TrendingCard from "../TrendingCard/TrendingCard";
import TrendingCardSmall from "../TrendingCardSmall/TrendingCardSmall";


const MainContent = props => (
	<div className="main-content">
		<div className="trending-card-row">
			<Row className="show-grid">
				{props.json.trendingCard.map(item => (
					<TrendingCard title={item.title} subtitle={item.subtitle} imagesrc={item.imageSrc} mainImageSrc={item.mainImageSrc}/>
				))}
			</Row>
		</div>
		<div className="trending-small-card-row">
			<Row className="show-grid">
				{props.json.smallTrendingCard.map(item => (
					<TrendingCardSmall text={item.smallCardText} imagesrc={item.imageSrc}/>
				))}
			</Row>
		</div>
	</div>
);

export default MainContent;
