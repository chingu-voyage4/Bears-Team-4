// This document contain functions that operate on "Store" Collection

// Get All Stores and Categories as Array List from Stores Collection
function findAllStoresAndCategories() {
  // Store.aggregate([
  //   {$group:{ _id :null, categories:{$addToSet: "$categories"}, name:{$addToSet: "$name"}}},
  //   {$project : {_id:0, categories:1, name : 1}}
  // ])
  return new Promise((resolve, reject) => {
    this.aggregate()
      // Define how to group all document in to one document. In here we use "$addToSet" combine all values to array.
      .group({
        _id: null,
        categories: { $addToSet: "$categories" },
        name: { $addToSet: "$name" }
      })
      // Define witch filed to show
      .project({ _id: 0, categories: 1, name: 1 })
      .then(r => {
        /**
         * "r" output is like below
         *
         * [{"categories":[["Clothing"],["Home","Kids"],["Kids"]], - Category of each store
         * "name":["Fanoodle","Abata","Voonte","Tazzy","Linktype"]}] - Store Names
         **/

        let allCategories = r[0].categories;
        let allStores = r[0].name;

        // Combining all sub category arrays to single array
        allCategories = allCategories.reduce((final, val) => {
          return final.concat(val);
        }, []);

        // Filtering to only hold unique values
        allCategories = allCategories.filter((val, i) => {
          return allCategories.indexOf(val) === i;
        });

        // Sending result as a Promise
        resolve({
          allCategories, // Array containing all unique categories
          allStores // Array containing all unique stores
        });
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  findAllStoresAndCategories
};
