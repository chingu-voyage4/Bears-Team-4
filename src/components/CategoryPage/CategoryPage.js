import React, { Component } from "react";
import "./CategoryPage.css";

class CategoryPage extends Component {
  render() {
    return (
      <div className="categoryPage">
        <h1 style={{ fontSize: "100px" }}>
          Category Page - {this.props.match.params.categoryName}
        </h1>
      </div>
    );
  }
}

export default CategoryPage;
