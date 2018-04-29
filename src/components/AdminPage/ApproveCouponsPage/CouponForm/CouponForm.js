import { connect } from "react-redux";
import { Formik } from "formik";
import React, { Component } from "react";

import axios from "../../../../actions/axiosInstances"; // Pre configured axios instance
import couponFormInitilizer from "./couponFormInitilizer";
import couponFormValidator from "./couponFormValidator";

import "./CouponForm.css";

function generateDropDownListItems(storesState) {
  // Initial List Items
  const dropDownListItems = {
    kind: [
      { key: "coupon", text: "Coupon", value: "coupon" },
      { key: "deal", text: "Deal", value: "deal" }
    ],
    store: [],
    categories: [],
    tags: []
  };

  // Filling ListItems with servers info.
  storesState.allCategories.forEach((item, id) => {
    dropDownListItems.categories.push({ key: id, text: item, value: item });
  });

  storesState.allStores.forEach((item, id) => {
    dropDownListItems.store.push({ key: id, text: item, value: item });
  });

  storesState.allTags.forEach((item, id) => {
    dropDownListItems.tags.push({ key: id, text: item, value: item });
  });

  return dropDownListItems;
}

class CouponForm extends Component {
  render() {
    const dropDownListItems = generateDropDownListItems(this.props.storesState);

    return (
      <div className="couponForm">
        <Formik
          initialValues={{
            linkUrl: "",
            kind: "",
            code: "",
            expiredAt: "",
            title: "",
            description: "",
            exclutionDetails: "",
            store: "",
            imgUrl: "",
            categories: [],
            tags: [],
            dropDownListItems: dropDownListItems,
            ...this.props.initialValues,
          }}
          enableReinitialize={true} // Must enable for autoupdate when redux state changed.
          validationSchema={couponFormValidator}
          onSubmit={(values, actions) => {
            console.log("Hello", values, actions);
            actions.setFieldValue("uploading", true);
            axios
              .put(this.props.submitPath, values, { withCredentials: true }) // For cross domain cookies must use "withCredentials: true"
              .then(r => {
                actions.resetForm();
                actions.setFieldValue("showMsg", true);
                actions.setFieldValue("success", true);
                actions.setFieldValue("uploading", false);
                setTimeout(() => {
                  actions.setFieldValue("showMsg", false);
                  window.scrollTo(0, 0);
                }, 3000);
                console.log("Successfully Added", r);
              })
              .catch(err => {
                actions.setFieldValue("showMsg", true);
                actions.setFieldValue("success", false);
                actions.setFieldValue("uploading", false);
                console.log("Error Occured", err.response);
                setTimeout(() => {
                  actions.setFieldValue("showMsg", false);
                  window.scrollTo(0, 0);
                }, 3000);
              });
          }}
          render={couponFormInitilizer}
        />
      </div>
    );
  }
}

// Specifying which parts of states we want from redux storage
const mapStateToProps = state => {
  return {
    // searchState: state.search,
    storesState: state.stores,
    userState: state.user
  };
};

export default connect(mapStateToProps)(CouponForm);
