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

/*This is the main component that is returned*/
const RightSection = props => (
	<MuiThemeProvider>
		<Col mdOffset={3} sm={7}>
			<div className="right-section">
				<div className="upper-card">
					<Card>
						<CardText>
							<span className="upper-card-text">
								Already have an account? <a href="/login">Log in</a>
							</span>
						</CardText>
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

/*Sign with Facebook*/
const SignWithFb = props => (
	<div className="section">
		<Button type="submit" bsStyle="primary" bsSize="large" block>
			<InputGroup>
				<InputGroup.Button>
					<FacebookIcon className="footer-icons" />
				</InputGroup.Button>
				<span className="field-text">Sign with Facebook</span>
			</InputGroup>
		</Button>
	</div>
);

/*Renders the divider*/
const Divider = props => (
	<div className="section">
		<div className="divider">
			<span className="divider_content">OR</span>
		</div>
	</div>
);

/*Renders the signup form*/
class FormInstance extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "password",
			email: "",
			pass:"",
			formValid: false,
			errors: {}
		};
		this.showHide = this.showHide.bind(this);
		this.handleValidation = this.handleValidation.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setEmail = this.setEmail.bind(this);
	}
	showHide(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			type: this.state.type === "input" ? "password" : "input"
		});
	}

	handleValidation() {
			let fields = this.state.email;
			let passField=this.state.pass;
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
	setPassword(event){
		this.setState({ pass: event.target.value }, () => {
			this.handleValidation();
		});
	}
	setEmail(event){
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
							<Checkbox>
								Email me the best deals on RetailMeNot
							</Checkbox>
						</Col>
					</FormGroup>
					<FormGroup className="group-content">
						<Col>
							<Button
								type="submit"
								bsStyle="primary"
								bsSize="large"
								block
								disabled={!this.state.formValid}
							>
								Sign in
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default RightSection;
