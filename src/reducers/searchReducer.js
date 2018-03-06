const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TERM": {
      const searchTerm = action.searchTerm.toLowerCase();
      const recentTerms = state.recentTerms.concat([searchTerm]);

      return { ...state, searchTerm, recentTerms };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
