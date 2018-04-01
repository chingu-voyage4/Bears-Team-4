import * as ACTIONS from "../actions/actionTypes";

const couponsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TRENDING + "_FULFILLED":
      const { trendingDeals, topOffers } = action.payload.data;

      let trendingDealsObj = {},
        topOffersObj = {},
        trendingDealsId = [],
        topOffersId = [];

      // Map each recived coupon details into _id named seperate object in coupons branch.
      // and also mainatain seperate lists of topOffers, trendingDelas witch contain coupon ids
      trendingDeals.forEach(i => {
        trendingDealsObj[i._id] = i;
        trendingDealsId.push(i._id);
      });

      topOffers.forEach(i => {
        topOffersObj[i._id] = i;
        topOffersId.push(i._id);
      });

      return {
        ...state,
        coupons: { ...state.coupons, ...trendingDealsObj, ...topOffersObj },
        trendingDeals: [...state.trendingDeals, ...trendingDealsId],
        topOffers: [...state.topOffers, ...topOffers]
      };

    // Adding Commment
    case ACTIONS.ADD_COMMENT + "_FULFILLED": {
      // Ugly Code - Need Revsion
      // Just changeing only deeply nested relevent comment.
      return {
        ...state,
        coupons: {
          ...state.coupons,
          [action.payload.data._id]: {
            ...state.coupons[action.payload.data._id],
            comments: [
              ...state.coupons[action.payload.data._id].comments,
              action.payload.data.comments[ // This is what we try to change.
                action.payload.data.comments.length - 1
              ]
            ]
          }
        }
      };
    }

    default:
      return state;
  }
};

export default couponsReducer;
