import axios from "./axiosInstances"; // Pre configured axios instance

import * as ACTIONS from "./actionTypes"; 

export const ToggleDropDown = dropDown => {
  return {
    type: ACTIONS.TOGGLE_DROP_DOWN,
    dropDown
  };
};

export const UpdateRecentTerms = () => {
  return {
    type: ACTIONS.UPDATE_RECENT_TERMS
  };
};

export const ChangeSearchTerm = (searchTerm, allStores, allCategories) => {
  let filteredStores, filteredCategories;

  // Converting search term into lowercase
  searchTerm = searchTerm.toLowerCase();

  if (searchTerm === "") {
    // When search bar is empty just giving random amount of stores, and categories
    filteredStores = allStores.slice(0, 15);
    filteredCategories = allCategories.slice(0, 15);
  } else {
    // When search bar have value giving stores that contain that value
    filteredStores = allStores
      .filter(store => {
        return store.toLowerCase().includes(searchTerm);
      })
      .slice(0, 15); // Limiting output

    // When search bar have value giving categories that contain that value
    filteredCategories = allCategories
      .filter(category => {
        return category.toLowerCase().includes(searchTerm);
      })
      .slice(0, 15); // Limiting output
  }

  return {
    type: ACTIONS.CHANGE_SEARCH_TERM,
    searchTerm,
    filteredStores,
    filteredCategories
  };
};

export const fetchAllStoresAndCategories = () => {
  return {
    type: ACTIONS.FETCH_STORES_AND_CATEGORIES,
    payload: axios.get("store/allStoresAndCategories")
  };
};
