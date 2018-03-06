import React, { Component } from "react";
import "./SearchDropDownItem.css";

class SearchDropDownItem extends Component {
  render() {
    const { title, items, linkType, history } = this.props;

    return (
      <div className="searchDropDownItem">
        <ul className="searchDropDownItem__column">
          <li style={{ fontWeight: "bold" }}>{title}</li>
          <ul>
            {!items.length ? <span>Nothing Matched</span> : ""}
            {items.map((term, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    history.push(`/${linkType}/${term}`);
                  }}
                >
                  {term}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}

export default SearchDropDownItem;
