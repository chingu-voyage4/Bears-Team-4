/**
 * This component render search box and when focused also show drop down box containing
 * recent search, related stores and categories.
 *
 * We connect this component in Redux Store Folder for get Redux State and Action.
 *
 **/

import { withRouter } from "react-router-dom"; // For inject history prop to this component
import React, { Component } from "react";

import SearchDropDownItem from "./SearchDropDownItem/SearchDropDownItem";

import "./Search.css";

class Search extends Component {
  componentWillMount() {
    this.props.actions.fetchAllStoresAndCategories();
  }

  render() {
    // Extract actions and states from Redux Container Component that got passed as props.
    const {
      actions: {
        ChangeSearchTerm, // Update searchTerm, filteredStores, filteredCategories in search state.
        UpdateRecentTerms, // Update recentTerms array in search state.
        ToggleDropDown
      }, // Update dropDown status in search state.
      search, // search state
      history // history from "react-router-dom > withRouter" for Redirections
    } = this.props;

    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search on RetailMeNot"
          ref="search"
          // As user type searchTerm, filteredStores, filteredCategories in search state change.
          onChange={e => {
            ChangeSearchTerm(
              e.target.value,
              search.allStores,
              search.allCategories
            );
            ToggleDropDown(true);
          }}
          // When user "Enter" add that value to recentTerms array in search state and redirect to "/search/xxxx"
          onKeyPress={e => {
            if (e.key === "Enter") {
              UpdateRecentTerms();
              ToggleDropDown(false);
              history.push(`/search/${e.target.value}`); // Redirection
              e.target.value = "";
            }
          }}
          // When user focus in/out on search box or click an item in dropdown, dropDown status in search state change.
          // This dropDown value determine whether to show or hide drop down box.
          onFocus={e => {
            ToggleDropDown(true);
            ChangeSearchTerm(
              e.target.value,
              search.allStores,
              search.allCategories
            );
          }}
          onBlur={() => {
            ToggleDropDown(false);
          }}
          onClick={e => {
            ToggleDropDown(true);
            ChangeSearchTerm(
              e.target.value,
              search.allStores,
              search.allCategories
            );
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
          onClick={() => {
            this.refs.search.value = ""; // Clean Search box when clicked on a drop down item.
          }}
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
