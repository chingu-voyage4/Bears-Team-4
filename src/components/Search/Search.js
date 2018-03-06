import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    const { ChangeSearchTerm, search } = this.props;

    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search on RetailMeNot"
          onKeyPress={e => {
            if (e.key === "Enter") {
              ChangeSearchTerm(e.target.value);
              e.target.value = "";
            }
          }}
        />

        <div className="search__dropDown">
          <ul className="search__dropDown__column">
            <li style={{ fontWeight: "bold" }}>Recent Searchs</li>
            <ul>
              {search.recentTerms.map((term, i) => {
                return <li key={i}>{term}</li>;
              })}
            </ul>
          </ul>
          <ul className="search__dropDown__column">
            <li style={{ fontWeight: "bold" }}>Suggestions</li>
            <ul>
              {search.suggestion.map((term, i) => {
                return <li key={i}>{term}</li>;
              })}
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
