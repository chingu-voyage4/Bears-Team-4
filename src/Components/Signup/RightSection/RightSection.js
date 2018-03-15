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




class RightSection extends Component {

constructor(props){
    super(props);
    this.state = {
      type: 'password'
    }
    this.showHide = this.showHide.bind(this);
  }
showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }
  render(){
  	return(
  		<MuiThemeProvider>
		<Col mdOffset={3} sm={9}>
			<div className="right-section">
				<div className="upper-card">
					<Card>
						<CardText><span className="upper-card-text">Already have an account? <a href="#">Log in</a></span></CardText>
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
  }
}

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

const Divider = props => (
	<div className="section">
		<div className="divider">
			<span className="divider_content">OR</span>
		</div>
	</div>
);

class FormInstance extends Component{
	constructor(props){
    super(props);
    this.state = {
      type: 'password'
    }
    this.showHide = this.showHide.bind(this);
  }
showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }
  render(){
  	return(
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
						<FormControl type="email" placeholder="Email" />
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
						<FormControl type={this.state.type} placeholder="Password" />

						<InputGroup.Button>
							<Button onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</Button>
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
					<Button
						type="submit"
						bsStyle="primary"
						bsSize="large"
						block
						disabled
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
