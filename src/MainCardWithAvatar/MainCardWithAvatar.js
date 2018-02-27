import React, { Component } from "react";
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from "material-ui/Card";
import Avatar from 'material-ui/Avatar';
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./MainCardWithAvatar.css";

const style = {borderRadius: 0};

const MainCardWithAvatar = props => (
	<MuiThemeProvider>
	<Card>
	<CardMedia
	overlay={
		<CardHeader
		title={props.title}
		subtitle={props.subtitle}
			avatar={
			<Avatar
			src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
			size={30}
			style={style}
			/>}
	
		/>}
	>
		<img
		src="https://wallpaperbrowse.com/media/images/_89716241_thinkstockphotos-523060154.jpg"
		alt=""
		/>
		</CardMedia>
		</Card>
		</MuiThemeProvider>
		);

export default MainCardWithAvatar;

