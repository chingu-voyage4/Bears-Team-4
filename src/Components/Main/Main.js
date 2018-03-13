import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Row } from "react-bootstrap";
import "./Main.css";
import MainContent from "../MainContent/MainContent";
import NotFound from "../NotFound/NotFound";
import { Switch, Route} from 'react-router-dom';

const Main = props => (
	<main>
		<Switch>
			<Route exact path="/" render={()=><MainContent json={props.json}/>} />
			<Route exact path="/signup" render={()=><MainContent json={props.json}/>} />
			<Route component={NotFound} />
		</Switch>
	</main>
);

export default Main;
