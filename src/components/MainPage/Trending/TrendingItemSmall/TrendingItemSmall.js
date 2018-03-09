/**
 * This compoent render only Small Logo + Deal Description
 */

import React, { Component } from "react";
import "./TrendingItemSmall.css";

class TrendingItemSmall extends Component {
  render() {
    const { logoImg, dealDescription } = this.props.item;

    return (
      <div className="trending-item-small">
        <img className="trending-item-small__logo-img" alt="" src={logoImg} />
        <div className="trending-item-small__description">
          {dealDescription}
        </div>
      </div>
    );
  }
}

export default TrendingItemSmall;
