
import { Route } from "react-router-dom";
import React, { Component } from "react";
import {Row, Col } from "react-bootstrap";
import "./Admin.css";

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
      	<Row>
      		<h2 className="text-center">Coupon Validation Space</h2>
      	</Row>
    	<Row>
    		<Col sm={2}>

    		</Col>
    		<Col sm={8}>

    		</Col>
    	</Row>
      </div>
    );
  }
}

export default Admin;
