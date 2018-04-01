import * as ACTIONS from "../actions/actionTypes";

const storesReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER_LOCATION: {
      return { ...state, city: action.city, country: action.country };
    }
    default: {
      return state;
    }
  }
};

export default storesReducer;
