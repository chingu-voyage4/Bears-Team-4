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
import Avatar from "material-ui/Avatar";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FontIcon from "material-ui/FontIcon";
import TextField from "material-ui/TextField";
import FacebookIcon from "mdi-react/FacebookIcon";
import {
	Form,
	FormGroup,
	FormControl,
	Button,
	InputGroup,
	Glyphicon,
	Checkbox
} from "react-bootstrap";
import "./RightSection.css";

const RightSection = props => (
	<MuiThemeProvider>
		<div className="right-section">
			<div className="upper-card">
				<Card>
					<CardText>Already have an account? Log in</CardText>
				</Card>
			</div>
			<div className="lower-card">
				<Card>
					<SignWithFb />
					<Divider />
					<FormInstance />
				</Card>
			</div>
		</div>
	</MuiThemeProvider>
);

const SignWithFb = props => (
	<Button type="submit" bsStyle="primary" bsSize="large" block>
		<FacebookIcon className="footer-icons" />Sign with Facebook
	</Button>
);

const Divider = props => (
	<div className="divider">
		<span className="divider_content">OR</span>
	</div>
);

const FormInstance = props => (
	<Form horizontal>
		<FormGroup controlId="formHorizontalEmail">
			<Col sm={10}>
				<InputGroup>
					<InputGroup.Addon>
						<Glyphicon glyph="envelope" />
					</InputGroup.Addon>
					<FormControl type="email" placeholder="Email" />
				</InputGroup>
			</Col>
		</FormGroup>

		<FormGroup controlId="formHorizontalPassword">
			<Col sm={10}>
				<InputGroup>
					<InputGroup.Addon>
						<Glyphicon glyph="lock" />
					</InputGroup.Addon>
					<FormControl type="password" placeholder="Password" />
					<InputGroup.Addon>
						<p className="pass-show">Show</p>
					</InputGroup.Addon>
				</InputGroup>
			</Col>
		</FormGroup>
		<FormGroup>
			<Col smOffset={2} sm={10}>
				<Checkbox>Email me the best deals on RetailMeNot</Checkbox>
			</Col>
		</FormGroup>
		<FormGroup>
			<Col smOffset={2} sm={10}>
				<Button type="submit" bsStyle="primary" bsSize="large" block>
					Sign in
				</Button>
			</Col>
		</FormGroup>
	</Form>
);

export default RightSection;
