import * as ACTIONS from "../actions/actionTypes";

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_DROP_DOWN: {
      const { dropDown } = action;
      return { ...state, dropDown };
    }
    case ACTIONS.CHANGE_SEARCH_TERM: {
      const { searchTerm, filteredStores, filteredCategories } = action;
      return { ...state, searchTerm, filteredStores, filteredCategories };
    }
    case ACTIONS.UPDATE_RECENT_TERMS: {
      if (state.searchTerm) {
        const searchTerm = "";
        const recentTerms = state.recentTerms.concat([state.searchTerm]);
        return { ...state, searchTerm, recentTerms };
      } else {
        // Doing nothing if search term is empty
        return { ...state };
      }
    }
    case ACTIONS.FETCH_STORES_AND_CATEGORIES + "_FULFILLED": {
      const data = action.payload.data;

      return {
        ...state,
        allCategories : data.allCategories.sort(),
        allStores : data.allStores.sort(),
        filteredCategories : data.allCategories.sort(),
        filteredStores : data.allStores.sort(),
      }
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
