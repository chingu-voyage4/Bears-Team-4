/*This component renders the Login Page for the site*/
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SimpleFormInstance from "../SimpleFormInstance/SimpleFormInstance";

// import "./LoginPage.css";

/*This is the main component that is exported*/
const Login = props => (
	<MuiThemeProvider>
		<div className="right-section">
			<Row>
				<Col mdOffset={4} md={4} className="right-section-container">
					<SimpleFormInstance type="login"/>
				</Col>
			</Row>
		</div>
	</MuiThemeProvider>
);
export default Login;
