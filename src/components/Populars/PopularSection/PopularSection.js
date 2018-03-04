import React, { Component } from "react";
import "./PopularSection.css";

class PopularSection extends Component {
  render() {
    var list = [
      "Advance",
      "Auto",
      "Parts",
      "Amazon",
      "American",
      "Advance",
      "Auto",
      "Parts",
      "Amazon",
      "American",
      "Advance",
      "Auto",
      "Parts",
      "Amazon",
      "American",
      "Eagle",
      "Outfitters",
      "Auntie Anne's",
      "Bath & Body Works",
      "Bed Bath and Beyond",
      "Best Buy"
    ];
    return (
      <div className="popularSection">
        <div className="popularSection__headline">
          <i className="fas fa-angle-down" /> &nbsp; Popular Stores
        </div>
        <div className="popularSection__items">
          <ul>
            {list.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PopularSection;
