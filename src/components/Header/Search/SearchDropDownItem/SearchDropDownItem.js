/**
 * This component generate link list like recentTerms, matched categories/stores.
 */

import React, { Component } from "react";

import "./SearchDropDownItem.css";

class SearchDropDownItem extends Component {
  render() {
    /**
     * linkType - determine when item is clicked redirected to which page
     *    possible values are = search, stores, categories
     */
    const { title, items, linkType, history } = this.props;

    return (
      <div className="searchDropDownItem">
        <ul className="searchDropDownItem__column">
          <li style={{ fontWeight: "bold" }}>{title}</li>
          <ul>
            {/* If recived list have 0 items. We Show this span indicating nothing matched */}
            {!items.length ? (
              <span className=".searchDropDownItem__column--noMatched">
                Nothing Matched
              </span>
            ) : (
              ""
            )}

            {/* Generate Items */}
            {items.map((term, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    history.push(`/${linkType}/${term}`); // Redirecting to appoprate page according to linkType prop
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
