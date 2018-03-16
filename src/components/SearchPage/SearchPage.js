import React, { Component } from "react";
import "./SearchPage.css";

class SearchPage extends Component {
  render() {
    return (
      <div className="searchPage">
        <h1 style={{ fontSize: "100px" }}>
          Search Page - {this.props.match.params.term}
        </h1>
      </div>
    );
  }
}

export default SearchPage;
