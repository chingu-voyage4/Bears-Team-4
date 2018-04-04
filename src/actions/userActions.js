import axiosExternal from "axios";
import axios from "./axiosInstances"; // Pre configured axios instance

import * as ACTIONS from "./actionTypes";

export function GetUserLocation() {
  return function(dispatch) {
    axiosExternal
      .get("https://api.ipdata.co")
      .then(r => {
        dispatch({
          type: ACTIONS.GET_USER_LOCATION,
          country: r.data.country_name,
          city: r.data.city
        });
      })
      .catch(err => {});
  };
}

export function SignUp(signUpDetails) {
  return dispatch => {
    axios
      .post("auth/signup", signUpDetails, { withCredentials: true }) // For cross domain cookies must use "withCredentials: true"
      .then(r => {
        // Save usrs details in local storage for easy and presitant storage.
        // When app start, In userReducer we get this value and set it as initial value if available.
        localStorage.setItem(
          "user",
          JSON.stringify({ ...r.data.message, authenticated: true })
        );

        dispatch({
          type: ACTIONS.AUTH_SIGNUP + "_FULFILLED",
          payload: r.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ACTIONS.AUTH_SIGNUP + "_REJECTED",
          payload: err.response // We are using "err.reponse" to get error response text from server. If we just used "err" onely then we get axios manipulated error.
        });
      });
  };
}

export function LogIn(logInDetails) {
  return dispatch => {
    axios
      .post("auth/login", logInDetails, { withCredentials: true }) // For cross domain cookies must use "withCredentials: true"
      .then(r => {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...r.data.message, authenticated: true })
        );
        dispatch({
          type: ACTIONS.AUTH_LOGIN + "_FULFILLED",
          payload: r.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ACTIONS.AUTH_LOGIN + "_REJECTED",
          payload: err.response // We are using "err.reponse" to get error response text from server. If we just used "err" onely then we get axios manipulated error.
        });
      });
  };
}

export function LogOut() {
  return dispatch => {
    axios
      .get("auth/logout", { withCredentials: true }) // For cross domain cookies must use "withCredentials: true"
      .then(r => {
        localStorage.removeItem("user");
        dispatch({
          type: ACTIONS.AUTH_LOGOUT+ "_FULFILLED",
          payload: r.data
        });
      });
  };
}
