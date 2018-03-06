export const ToggleDropDown = dropDown => {
  return {
    type: "TOGGLE_DROP_DOWN",
    dropDown
  };
};

export const UpdateRecentTerms = () => {
  return {
    type: "UPDATE_RECENT_TERMS"
  };
};

export const ChangeSearchTerm = (searchTerm, allStores, allCategories) => {
  let filteredStores, filteredCategories;

  // Converting search term into lowercase
  searchTerm = searchTerm.toLowerCase();

  if (searchTerm === "") {
    // When search bar is empty just giving random amount of stores, and categories
    filteredStores = allStores.slice(2, 10);
    filteredCategories = allCategories.slice(2, 10);
  } else {
    // When search bar have value giving stores that contain that value
    filteredStores = allStores.filter(store => {
      return store.toLowerCase().includes(searchTerm);
    });

    // When search bar have value giving categories that contain that value
    filteredCategories = allCategories.filter(category => {
      return category.toLowerCase().includes(searchTerm);
    });
  }

  return {
    type: "CHANGE_SEARCH_TERM",
    searchTerm,
    filteredStores,
    filteredCategories
  };
};
