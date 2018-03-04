import React, { Component } from "react";

import PopularSection from "./PopularSection/PopularSection";

class Populars extends Component {
  render() {
    return (
      <div className="populars">
        <PopularSection />
        <PopularSection />
      </div>
    );
  }
}

export default Populars;
