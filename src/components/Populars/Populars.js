import React, { Component } from "react";
import "./Populars.css";

import PopularSection from "./PopularSection/PopularSection";

class Populars extends Component {
  render() {
    return (
      <div className="Populars">
        <PopularSection />
        <PopularSection />
      </div>
    );
  }
}

export default Populars;
