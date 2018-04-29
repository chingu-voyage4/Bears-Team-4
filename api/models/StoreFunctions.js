// This document contain functions that operate on "Store" Collection

// Get All Stores, Tags and Categories as Array List from Stores Collection
// Useful for Search Comopnent, Populars Component, etc...
function findAllStoresAndCategories() {
  // Store.aggregate([
  //   {$group:{ _id :null, categories:{$addToSet: "$categories"}, name:{$addToSet: "$name"}}},
  //   {$project : {_id:0, categories:1, name : 1}}
  // ])
  return new Promise((resolve, reject) => {
    this.aggregate()
      // Define how to group all document in to one document. In here we use "$addToSet" combine all values to single array.
      .group({
        _id: null,
        categories: { $addToSet: "$categories" },
        tags: { $addToSet: "$tags" },
        name: { $addToSet: "$name" }
      })
      // Define witch field to output
      .project({ _id: 0, categories: 1, tags: 1, name: 1 })
      .then(r => {
        /**
         * "r" output would be something like below
         *
         * [{"categories":[["Clothing"],["Home","Kids"],["Kids"]], - Category of each store
         * "name":["Fanoodle","Abata","Voonte","Tazzy","Linktype"]}] - Store Names
         * "tags":["book", "super", "awesome"]
         **/

        let allCategories = r[0].categories;
        let allStores = r[0].name;
        let allTags = r[0].tags;

        // Combining all sub category arrays to single array
        allCategories = allCategories.reduce((final, val) => {
          return final.concat(val);
        }, []);
        // Filtering to only hold unique values
        allCategories = allCategories.filter((val, i) => {
          return allCategories.indexOf(val) === i;
        });

        // Combining all sub tag arrays to single array
        allTags = allTags.reduce((final, val) => {
          return final.concat(val);
        }, []);
        // Filtering to only hold unique values
        allTags = allTags.filter((val, i) => {
          return allTags.indexOf(val) === i;
        });

        // Sending result as a Promise
        resolve({
          allCategories, // Array containing all unique categories
          allStores, // Array containing all unique stores
          allTags, // Array containing all unique tags
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
