/*This is the component with the form for signup and link to login page too*/

import React from "react";
import { Col } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SimpleFormInstance from "../../SimpleFormInstance/SimpleFormInstance";

/*This is the main component that is returned*/
const RightSection = props => (
  <MuiThemeProvider>
    <Col>
      <SimpleFormInstance type="signup" {...props} />
    </Col>
  </MuiThemeProvider>
);

export default RightSection;
