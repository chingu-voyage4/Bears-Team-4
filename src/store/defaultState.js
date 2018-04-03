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
    stores: [
      {
        storeId: "xyz1",
        name: "KFC",
        description: "",
        logoImg: "https://source.unsplash.com/200x200/?h",
        category: [""],
        rating: 0
      }
    ],
    names: [
      "99",
      "Cents",
      "Only",
      "Stores",
      "Bargain",
      "Hunt",
      "Ben",
      "Franklin",
      "Bi-Mart",
      "Big",
      "Lots",
      "BJ's",
      "Wholesale",
      "Club",
      "Burlington",
      "Coat",
      "Factory",
      "Costco",
      "Dd's",
      "Discounts",
      "Dollar",
      "General",
      "Dollar",
      "Tree",
      "Family",
      "Dollar",
      "Five",
      "Below",
      "Fred's",
      "Fred",
      "Meyer",
      "Gabe's",
      "Gordmans",
      "Harbor",
      "Freight",
      "Tools",
      "HomeGoods",
      "Kmart",
      "Magic",
      "Mart",
      "Marshalls",
      "Meijer",
      "National",
      "Stores",
      "National",
      "Wholesale",
      "Liquidators",
      "Ocean",
      "State",
      "Job",
      "Lot",
      "Ollie's",
      "Bargain",
      "Outlet",
      "Renys",
      "Roses",
      "Ross",
      "Stores",
      "Shopko",
      "Stein",
      "Mart",
      "Target",
      "T.J.",
      "Maxx",
      "Tuesday",
      "Morning",
      "Walmart"
    ],
    categories: [
      "Accessories",
      "Automotive",
      "Baby",
      "Beauty",
      "Books",
      "Clothing",
      "Electronics",
      "Flowers",
      "Food",
      "Furniture",
      "Gifts",
      "Health",
      "Home",
      "&",
      "Garden",
      "Jewelry",
      "Musical",
      "Instruments",
      "Office",
      "Supplies",
      "Party",
      "Supplies",
      "Pet",
      "Photography",
      "Services",
      "Shoes",
      "Sporting",
      "Goods",
      "Toys",
      "Travel"
    ]
  },
  coupons: {
    coupons: {},
    trendingDeals: [],
    topOffers: []
  }
};

export default defaultState;
