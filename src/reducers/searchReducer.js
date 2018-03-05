const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TERM": {
      const searchTerm = action.searchTerm.toLowerCase();
      return { ...state, searchTerm: searchTerm };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
