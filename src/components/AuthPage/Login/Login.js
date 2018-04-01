/*This component renders the Login Page for the site*/
import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SimpleFormInstance from "../SimpleFormInstance/SimpleFormInstance";

import "./Login.css";

/*This is the main component that is exported*/
const Login = props => (
  <MuiThemeProvider>
    <div className="right-section">
	<Grid fluid={true}>
      <Row>
        <Col smOffset={4} sm={5} className="right-section-container">
          <SimpleFormInstance type="login" />
        </Col>
      </Row>
	</Grid>
    </div>
  </MuiThemeProvider>
);
export default Login;
