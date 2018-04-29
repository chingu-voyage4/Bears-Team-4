import urlParser from "url-parse";

import { linkUrlValidator } from "./couponFormValidator";
import axios from "../../../../actions/axiosInstances"; // Pre configured axios instance

export const linkUrlHandler = (url, formikFunctions) => {
  console.log("Executing", url);

  // Adding protocol part to url whether user added it or not.
  url = new urlParser(url);
  url.set("protocol", "http");

  // Check user inputted url is valid or not and then progress accordingly
  linkUrlValidator.isValid({ linkUrl: url.href }).then(function(valid) {
    // Only progress if url is valid
    console.log("Valid Or Not : ", valid);
    if (valid) {
      console.log("Axios Executing");
      // Start Loading Animation
      formikFunctions.setValues({
        ...formikFunctions.values,
        linkUrlLoading: true
      });
      axios
        .get("/helpers/metadata?url=" + url)
        .then(r => {
          console.log(r);
          // Extracting Inforamtion from server response
          const { title, description, images, store } = r.data;

          let prevValues = formikFunctions.values;

          // Database has this store
          if (store) {
            formikFunctions.setValues({
              ...prevValues,
              title: title,
              store: store.name,
              description: description,
              categories: store.categories,
              images: images,
              imgUrl: "",
              newStore: false,
              linkUrlLoading: false
            });
          } else {
            // Here executed mean Database doesnt have this store.
            let storeName = url.hostname; // Extract Only HostName Part From Url (ex: www.google.com)
            // Extracting only name part(ex: google) and capitalize it. (ex: Google)
            let domainArray = storeName.split(".");
            storeName =
              domainArray[domainArray.length - 2][0].toUpperCase() +
              domainArray[domainArray.length - 2].substr(1);

            // Getting Store drop down values and adding new item to it.
            let newDropDownStoreName =
              formikFunctions.values.dropDownListItems.store;
            newDropDownStoreName.push({
              key: storeName + Math.random(),
              text: storeName,
              value: storeName
            });

            formikFunctions.setValues({
              ...prevValues,
              title: title,
              store: storeName,
              description: description,
              dropDownListItems: {
                ...prevValues.dropDownListItems,
                store: newDropDownStoreName
              },
              images: images,
              imgUrl: "",
              newStore: true,
              linkUrlLoading: false,
              categories: [],
              tags: []
            });
          }
        })
        .catch(err => {
          let storeName = url.hostname; // Extract Only HostName Part From Url (ex: www.google.com)
          // Extracting only name part(ex: google) and capitalize it. (ex: Google)
          let domainArray = storeName.split(".");
          storeName =
            domainArray[domainArray.length - 2][0].toUpperCase() +
            domainArray[domainArray.length - 2].substr(1);

          // Getting Store drop down values and adding new item to it.
          let newDropDownStoreName =
            formikFunctions.values.dropDownListItems.store;
          newDropDownStoreName.push({
            key: storeName + Math.random(),
            text: storeName,
            value: storeName
          });

          // Clearing out previous values when request failed
          let prevValues = formikFunctions.values;
          formikFunctions.setValues({
            ...prevValues,
            title: "",
            store: storeName,
            description: "",
            images: [],
            imgUrl: "",
            categories: [],
            tags: [],
            newStore: true
          });
        });
    }
  });
};
