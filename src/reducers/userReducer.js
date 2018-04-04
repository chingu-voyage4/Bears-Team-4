import * as ACTIONS from "../actions/actionTypes";

// Initial userState
let defaultUserState = {
  country: null,
  city: null,
  authenticated: false
};

// Manipulating initial user state with user details from local storage if available.
defaultUserState = {
  ...defaultUserState,
  ...((JSON.parse(localStorage.getItem("user")) || {}))
};

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER_LOCATION: {
      return { ...state, city: action.city, country: action.country };
    }
    // Handle SignUp
    case ACTIONS.AUTH_SIGNUP + "_FULFILLED": {
      const { success, message } = action.payload;
      return {
        ...state,
        authenticated: success,
        ...message
      };
    }
    case ACTIONS.AUTH_SIGNUP + "_REJECTED": {
      return state;
    }

    // Handle LogIn
    case ACTIONS.AUTH_LOGIN + "_FULFILLED": {
      const { success, message } = action.payload;
      return {
        ...state,
        authenticated: success,
        ...message
      };
    }
    case ACTIONS.AUTH_LOGIN + "_REJECTED": {
      return state;
    }

    case ACTIONS.AUTH_LOGOUT + "_FULFILLED": {
      return {
        country: null,
        city: null,
        authenticated: false
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
