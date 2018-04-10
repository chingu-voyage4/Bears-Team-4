const defaultState = {
  search: {
    searchTerm: "",
    recentTerms: ["cat", "dog"],
    suggestion: ["kfc", "macdonalds", "pizza hut", "dominos"],
    allStores: [],
    allCategories: [],
    filteredStores: [],
    filteredCategories: [],
    dropDown: false
  },
  stores: {
    allStores: [],
    allCategories: [],
    allTags:[]
  },
  coupons: {
    coupons: {},
    trendingDeals: [],
    topOffers: []
  }
};

export default defaultState;
