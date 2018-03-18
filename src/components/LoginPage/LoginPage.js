/*This component renders the Login Page for the site*/
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
import SimpleFormInstance from "../SimpleFormInstance/SimpleFormInstance";
import {
	Form,
	FormGroup,
	FormControl,
	Button,
	InputGroup,
	Glyphicon,
	Checkbox
} from "react-bootstrap";
import "./LoginPage.css";

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

/*This returns the sign with facebook button */
const SignWithFb = props => (
	<div className="section">
		<Button type="submit" bsStyle="primary" bsSize="large" block>
			<InputGroup>
				<InputGroup.Button>
					<FacebookIcon className="footer-icons" />
				</InputGroup.Button>
				<span className="field-text">Login with Facebook</span>
			</InputGroup>
		</Button>
	</div>
);

/*This returns the divider ----OR---- */
const Divider = props => (
	<div className="section">
		<div className="divider">
			<span className="divider_content">OR</span>
		</div>
	</div>
);

/*This returns the form which contains textfield for email, password and submit button */
class FormInstance extends Component {

	/*Initialise the values using constructor */
	constructor(props) {
		super(props);
		this.state = {
			type: "password",
			email: "",
			pass: "",
			formValid: false,
			errors: {}
		};
		this.showHide = this.showHide.bind(this);
		this.handleValidation = this.handleValidation.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setEmail = this.setEmail.bind(this);
	}

	/*This provides the functionality behind show/hide feature of password field */
	showHide(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			type: this.state.type === "input" ? "password" : "input"
		});
	}

	/*This handles the validation for field email and password */
	handleValidation() {
		let fields = this.state.email;
		let passField = this.state.pass;
		let errors = {};
		let formIsValid = true;
		// console.log("Ehy" + fields);
		//Email
		if (!fields) {
			formIsValid = false;
			errors["email"] = "Cannot be empty";
		}
		if (!passField) {
			formIsValid = false;
		}
		if (typeof fields !== "undefined") {
			let lastAtPos = fields.lastIndexOf("@");
			let lastDotPos = fields.lastIndexOf(".");

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					fields.indexOf("@@") == -1 &&
					lastDotPos > 2 &&
					fields.length - lastDotPos > 2
				)
			) {
				formIsValid = false;
				errors["email"] = "Email is not valid";
			}
		}

		this.setState({ errors: errors });
		this.setState({ formValid: formIsValid });
		// console.log("Form valid:"+formIsValid);
		return formIsValid;
	}

	/*Triggers when there is change in password field and calls handleValidation to check if current data is valid or not and if valid enable the submit button */
	setPassword(event) {
		this.setState({ pass: event.target.value }, () => {
			this.handleValidation();
		});
	}
	/*Same as setPassword, for email field */
	setEmail(event) {
		this.setState({ email: event.target.value }, () => {
			this.handleValidation();
		});
	}

	render() {
		return (
			<div className="section">
				<Form horizontal>
					<FormGroup
						className="group-content"
						controlId="formHorizontalEmail"
					>
						<Col>
							<InputGroup>
								<InputGroup.Addon>
									<Glyphicon glyph="envelope" />
								</InputGroup.Addon>
								<FormControl
									type="email"
									placeholder="Email"
									onChange={this.setEmail}
								/>
							</InputGroup>
						</Col>
					</FormGroup>

					<FormGroup
						className="group-content"
						controlId="formHorizontalPassword"
					>
						<Col>
							<InputGroup>
								<InputGroup.Addon>
									<Glyphicon glyph="lock" />
								</InputGroup.Addon>
								<FormControl
									type={this.state.type}
									placeholder="Password"
									onChange={this.setPassword}
								/>
								<InputGroup.Button>
									<Button onClick={this.showHide}>
										{this.state.type === "input"
											? "Hide"
											: "Show"}
									</Button>
								</InputGroup.Button>
							</InputGroup>
						</Col>
					</FormGroup>
					<FormGroup className="group-content">
						<Col>
							<Button
								type="submit"
								bsStyle="primary"
								bsSize="large"
								block
								disabled={!this.state.formValid}/*Disabled at first */
							>
								Login
							</Button>
						</Col>
					</FormGroup>
					<FormGroup className="group-content text-center">
						<Col>
							<a href="#">Forgot Password?</a>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default Login;
