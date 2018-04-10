import * as ACTIONS from "../actions/actionTypes";

const storesReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_STORES_AND_CATEGORIES + "_FULFILLED": {
      const data = action.payload.data;

      return {
        ...state,
        allCategories : data.allCategories.sort(),
        allStores : data.allStores.sort(),
        allTags: data.allTags.sort()
      }
    }
    default: {
      return state;
    }
  }
};

export default storesReducer;
