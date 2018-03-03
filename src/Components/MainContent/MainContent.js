import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Row} from "react-bootstrap";
import "./MainContent.css";
import TrendingCardSmall from "../TrendingCardSmall/TrendingCardSmall";


const MainCardWithAvatar = props => (
	<MuiThemeProvider>
		<div className="trending-small-card-row">
			<Row className="show-grid">
				{props.json.smallCard.map(item => (
					<TrendingCardSmall text={item.smallCardText} imagesrc={item.imageSrc}/>
				))}
			</Row>
		</div>
	</MuiThemeProvider>
);

export default MainCardWithAvatar;
