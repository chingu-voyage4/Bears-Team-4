import axios from "axios";
import * as ACTIONS from "./actionTypes";

export function GetUserLocation() {
  return function(dispatch) {
    axios
      .get("https://api.ipdata.co")
      .then(r => {
        dispatch({
          type: ACTIONS.GET_USER_LOCATION,
          country: r.data.country_name,
          city: r.data.city
        });
      })
      .catch((err) => {});
  };
}
