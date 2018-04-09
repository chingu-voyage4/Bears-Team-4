import React from "react";
import { Card, CardHeader } from "material-ui/Card";
import { Col } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./LeftSection.css";
import logo from "../../../../images/signup.png";
const style = {
  boxShadow: 0,
  backgroundColor: "#f1f1f1"
};

/*This is the main component that is exported*/

const LeftSection = props => (
  <MuiThemeProvider>
    <div className="left-section">
      <Col >
        <h1>Create an account</h1>
        <strong>It's FREE and allows you to:</strong>
        <div className="services">
          <Services title="Track your savings—including Cash Back and Discount Gift Cards!" />
          <Services title="Save the deals you want and quickly access them at any time." />
          <Services title="Get recommendations on deals from your favorite brands." />
        </div>
      </Col>
    </div>
  </MuiThemeProvider>
);

/*Returns the service list with given title: for now assumed default image*/
const Services = props => (
  <Card style={style}>
    <CardHeader
      title={<div className="left-section-title">{props.title}</div>}
      avatar={logo}
    />
  </Card>
);
export default LeftSection;
