/**
 * This component render search box and when focused also show drop down box containing
 * recent search, related stores and categories.
 *
 * We wrap this component in Container Folder for get Redux State and Action as props.
 * See Containers/SearchContainer.js, actions/searchactions.js, reducers/searchReducer.js
 *
 * To render <Search> component use <SearchContainer>
 * Don't directly render this <Search>, beacuse then this will not have redux props.
 **/

import { withRouter } from "react-router-dom"; // For inject history prop to this component
import React, { Component } from "react";

import SearchDropDownItem from "./SearchDropDownItem/SearchDropDownItem";

import "./Search.css";

class Search extends Component {
  render() {
    // Extract actions and states from Redux Container Component that got passed as props.
    const {
      ChangeSearchTerm, // Update searchTerm, filteredStores, filteredCategories in search state.
      UpdateRecentTerms, // Update recentTerms array in search state.
      ToggleDropDown, // Update dropDown status in search state.
      search, // search state
      stores, // stores state
      history // history from "react-router-dom > withRouter" for Redirections
    } = this.props;

    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search on RetailMeNot"
          // As user type searchTerm, filteredStores, filteredCategories in search state change.
          onChange={e => {
            ChangeSearchTerm(e.target.value, stores.names, stores.categories);
          }}
          // When user "Enter" add that value to recentTerms array in search state and redirect to "/search/xxxx"
          onKeyPress={e => {
            if (e.key === "Enter") {
              UpdateRecentTerms();
              history.push(`/search/${e.target.value}`); // Redirection
              e.target.value = "";
            }
          }}
          // When user focus in/out on search box or click an item in dropdown, dropDown status in search state change.
          // This dropDown value determine whether to show or hide drop down box.
          onFocus={() => {
            ToggleDropDown(true);
          }}
          onBlur={() => {
            ToggleDropDown(false);
          }}
        />

        {/* Drop Down Box */}
        <div
          // Determine whether to show or hide drop down box
          className={
            search.dropDown
              ? "search__dropDown search__dropDown--show"
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
