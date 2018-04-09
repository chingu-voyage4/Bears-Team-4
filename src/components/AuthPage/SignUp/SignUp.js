/*This component renders the signup page*/

import { Grid, Row, Col } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React from "react";

import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

import "./SignUp.css";

/*LeftSection lists the services avaliable
  RightSection lists the form for signup*/

const SignUp = props => {
  return (
    <MuiThemeProvider>
      <Grid fluid={true}>
        <Row className="show-grid signup">
          <Col sm={4} md={6} xsHidden={true}>
            <LeftSection />
          </Col>
          <Col sm={8} md={6}>
            <RightSection {...props} />
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>
  );
};

export default SignUp;
