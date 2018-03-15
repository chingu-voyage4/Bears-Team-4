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
		<Col sm={9}>
			<div className="right-section">
				<div className="upper-card">
					<Card>
						<CardText>Already have an account? Log in</CardText>
					</Card>
				</div>
				<div className="lower-card">
					<Card>
						<div className="lower-card-content">
							<SignWithFb />
							<Divider />
							<FormInstance />
						</div>
					</Card>
				</div>
			</div>
		</Col>
	</MuiThemeProvider>
);

const SignWithFb = props => (
	<Button type="submit" bsStyle="primary" block>
		<InputGroup>
			<InputGroup.Button>
				<FacebookIcon className="footer-icons" />
			</InputGroup.Button>
			Sign with Facebook
		</InputGroup>
	</Button>
);

const Divider = props => (
	<div className="divider">
		<span className="divider_content">OR</span>
	</div>
);

const FormInstance = props => (
	<Form horizontal>
		<FormGroup className="group-content" controlId="formHorizontalEmail">
			<Col>
				<InputGroup>
					<InputGroup.Addon>
						<Glyphicon glyph="envelope" />
					</InputGroup.Addon>
					<FormControl type="email" placeholder="Email" />
				</InputGroup>
			</Col>
		</FormGroup>

		<FormGroup className="group-content" controlId="formHorizontalPassword">
			<Col>
				<InputGroup>
					<InputGroup.Addon>
						<Glyphicon glyph="lock" />
					</InputGroup.Addon>
					<FormControl type="password" placeholder="Password" />

					<InputGroup.Button>
						<Button>Show</Button>
					</InputGroup.Button>
				</InputGroup>
			</Col>
		</FormGroup>
		<FormGroup className="group-content">
			<Col>
				<Checkbox>Email me the best deals on RetailMeNot</Checkbox>
			</Col>
		</FormGroup>
		<FormGroup className="group-content">
			<Col>
				<Button type="submit" bsStyle="primary" bsSize="large" block>
					Sign in
				</Button>
			</Col>
		</FormGroup>
	</Form>
);

export default RightSection;
