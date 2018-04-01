/*This is the component with the form for signup and link to login page too*/

import React, { Component } from "react";
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from "material-ui/Card";
import { Row, Col } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SimpleFormInstance from "../../SimpleFormInstance/SimpleFormInstance";

/*This is the main component that is returned*/
const RightSection = props => (
	<MuiThemeProvider>
		<Col mdOffset={3} sm={7}>
			<SimpleFormInstance type="signup"/>
		</Col>
	</MuiThemeProvider>
);

export default RightSection;
