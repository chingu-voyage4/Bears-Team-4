import React, { Component } from "react";
import "./PopularSection.css";

class PopularSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      popularsOpen : false,
    }
  }

  togglePopularSection(){
    this.setState({
      popularsOpen : !this.state.popularsOpen
    });
  }


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

    var popularSectionToggle = {
      display : this.state.popularsOpen ? "block" : "none"
    };

    return (
      <div className="popularSection">
        <div className="popularSection__headline" onClick={this.togglePopularSection.bind(this)}>
          {this.state.popularsOpen
            ? <i className="fas fa-angle-up"></i>
            : <i className="fas fa-angle-down"></i>
          }
          &nbsp; Popular Stores
        </div>
        <div className="popularSection__items" style={popularSectionToggle}>
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
