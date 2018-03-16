import React, { Component } from "react";
import "./StoresPage.css";

class StoresPage extends Component {
  render() {
    return (
      <div className="storesPage">
        <h1 style={{ fontSize: "100px" }}>
          Stores Page - {this.props.match.params.storeName}
        </h1>
      </div>
    );
  }
}

export default StoresPage;
