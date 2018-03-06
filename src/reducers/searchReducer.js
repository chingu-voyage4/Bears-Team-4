const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_RECENT_TERMS": {
      if (state.searchTerm) {
        const searchTerm = "";
        const recentTerms = state.recentTerms.concat([state.searchTerm]);
        return { ...state, searchTerm, recentTerms };
      } else {
        // Doing nothing if search term is empty
        return { ...state };
      }
    }
    case "CHANGE_SEARCH_TERM": {
      const { searchTerm, filteredStores, filteredCategories } = action;
      return { ...state, searchTerm, filteredStores, filteredCategories };
    }
    case "TOGGLE_DROP_DOWN": {
      const { dropDown } = action;
      return { ...state, dropDown };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
