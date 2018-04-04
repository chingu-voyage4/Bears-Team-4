import axios from "./axiosInstances"; // Pre configured axios instance

import * as ACTIONS from "./actionTypes";

export const FetchTrendingAndTopOffers = (big, small) => {
  return {
    type: ACTIONS.FETCH_TRENDING,
    payload: axios.get("coupon/trending")
  };
};

export const AddComment = commentData => {
  // If user is not registered and also not provided name then username will be saved as Anonymus.
  if (!commentData.userId && !commentData.username) {
    commentData.username = "Anonymus";
  }

  return {
    type: ACTIONS.ADD_COMMENT,
    payload: axios.post("coupon/addComment", commentData)
  };
};
