import React, { Component } from "react";
import "./Search.css";

import SearchDropDownItem from "./SearchDropDownItem/SearchDropDownItem";

import { withRouter } from "react-router-dom";

class Search extends Component {
  render() {
    const {
      ChangeSearchTerm,
      UpdateRecentTerms,
      ToggleDropDown,
      search,
      stores,
      history
    } = this.props;

    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search on RetailMeNot"
          onChange={e => {
            ChangeSearchTerm(e.target.value, stores.names, stores.categories);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              UpdateRecentTerms();
              history.push(`/search/${e.target.value}`);
              e.target.value = "";
              e.target.blur();
            }
          }}
          onFocus={() => {
            ToggleDropDown(true);
          }}
          onBlur={() => {
            ToggleDropDown(false);
          }}
        />

        <div
          className={
            search.dropDown
              ? "search__dropDown search__dropDown_show"
              : "search__dropDown"
          }
        >
          <SearchDropDownItem
            title="Recent"
            items={search.recentTerms}
            linkType="search"
            history={history}
          />
          <SearchDropDownItem
            title="Stores"
            items={search.filteredStores}
            linkType="stores"
            history={history}
          />
          <SearchDropDownItem
            title="Categories"
            items={search.filteredCategories}
            linkType="category"
            history={history}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
