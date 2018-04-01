/*This component renders the Login Page for the site*/
import { Card, CardText } from "material-ui/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookIcon from "mdi-react/FacebookIcon";
import React, { Component } from "react";

import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup,
  Glyphicon
} from "react-bootstrap";
import "./SimpleFormInstance.css";

/*This is the main component that is exported*/

class SimpleFormInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type //stores whether login page is being rendered or signup page is
    };

    //The following values would be used to display the form

    //I have declared maybe more variables to avoid complexity in code. Whatever decisions are made are done in constructor itself. The rendering code is only rendering the values, and no decision or conditional thing is done there.
    this.title = this.state.type === "login" ? "Login" : "Sign Up"; //Tells title of page that is being rendered
    this.secondTitle = this.state.type === "login" ? "Sign Up" : "Log in"; //Stores which page is not being rendered(like in login page there should be option to go to signup page and vice-versa)
    this.description =
      this.state.type === "login"
        ? "Don’t have an account?"
        : "Already have an account? ";
    this.link = this.state.type === "login" ? "/auth/signup" : "/auth/login"; //Link to other page
  }
  render() {
    return (
      <div className="form">
        <div className="upper-card">
          <Card>
            <CardText>
              <span className="upper-card-text">
                {this.description}{" "}
                <Link to={this.link}>{this.secondTitle}</Link>
              </span>
            </CardText>
          </Card>
        </div>
        <div className="lower-card">
          <Card>
            <div className="lower-card-content">
              <SignWithFb title={this.title} />
              <Divider />
              <FormInstance title={this.title} />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

/*This returns the sign with facebook button */
const SignWithFb = props => (
  <div className="section">
    <Button type="submit" bsStyle="primary" bsSize="large" block>
      <InputGroup>
        <InputGroup.Button>
          <FacebookIcon className="footer-icons" />
        </InputGroup.Button>
        <span className="field-text">{props.title} with Facebook</span>
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
      title: this.props.title,
      isLogging: this.props.title === "Login" ? true : false,
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
          fields.indexOf("@@") === -1 &&
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
          <FormGroup className="group-content" controlId="formHorizontalEmail">
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
                    {this.state.type === "input" ? "Hide" : "Show"}
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
                disabled={!this.state.formValid} /*Disabled at first */
              >
                {this.state.title}
              </Button>
            </Col>
          </FormGroup>
          <LastElement isLoggedIn={this.state.isLogging} />
        </Form>
      </div>
    );
  }
}

function LastElement(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <FormGroup className="group-content text-center">
        <Col>
          <a href="">Forgot Password?</a>
        </Col>
      </FormGroup>
    );
  } else {
    return (
      <div className="text-center">
        <p>
          By joining, I agree to RetailMeNot’s <a href="">Privacy Policy</a> and
          <a href=""> Terms of Use</a>.
        </p>
      </div>
    );
  }
}

export default SimpleFormInstance;
