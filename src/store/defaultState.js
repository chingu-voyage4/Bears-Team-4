const defaultState = {
  search: {
    searchTerm: "",
    recentTerms: ["cat", "dog"],
    suggestion: ["kfc", "macdonalds", "pizza hut", "dominos"],
    allStores:[],
    allCategories:[],
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
  trending: [
    {
      productImg: "https://source.unsplash.com/500x500/?a",
      logoImg: "https://source.unsplash.com/200x200/?b",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?c",
      logoImg: "https://source.unsplash.com/200x200/?d",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?e",
      logoImg: "https://source.unsplash.com/200x200/?f",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?g",
      logoImg: "https://source.unsplash.com/200x200/?h",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?i",
      logoImg: "https://source.unsplash.com/200x200/?j",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?k",
      logoImg: "https://source.unsplash.com/200x200/?l",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?m",
      logoImg: "https://source.unsplash.com/200x200/?n",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?o",
      logoImg: "https://source.unsplash.com/200x200/?p",
      dealDescription: "Deal Description",
      companyName: "My Company"
    },
    {
      productImg: "https://source.unsplash.com/500x500/?q",
      logoImg: "https://source.unsplash.com/200x200/?r",
      dealDescription: "Deal Description",
      companyName: "My Company"
    }
  ],
  coupons: [
    {
      couponId: "xyz1",
      storeId: "jhk1",
      type: "Coupon",
      category: ["food"],
      addedDate: "01/04/18",
      expireDate: "03/04/18",
      title: "Up to 75% off + Free shipping ",
      description:
        "Kate spade surprise sale! Get up to 75% off + Free shipping on all orders to U.S. and Canada when you spend $99 or more. all sales final",
      exclutionDetails: "",
      url: "",
      useCount: 0,
      likes: 0,
      comments: [
        {
          commentId: "xx",
          comment: "Awesome",
          addedDate: "03/05/18",
          userId: "abc2"
        },
        {
          commentId: "xx2",
          comment: "Awesome2",
          addedDate: "03/05/18",
          userId: "abc1"
        },
        {
          commentId: "xx3",
          comment: "Awesome3",
          addedDate: "03/05/18",
          userId: "abc3"
        }
      ]
    }
  ]
};

export default defaultState;
