import { connect } from "react-redux";
import { Formik } from "formik";
import { Header, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import axios from "../../actions/axiosInstances"; // Pre configured axios instance
import couponSubmitForm from "./couponSubmitForm";
import couponSubmitFormValidator from "./couponSubmitFormValidator";

import "./CouponSubmitPage.css";

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

class CouponSubmitPage extends Component {
  render() {
    const { userState } = this.props;
    const dropDownListItems = generateDropDownListItems(this.props.storesState);

    if (!userState.authenticated) {
      return (
        <div className="unauthorized">
          <h1>
            Sorry, Only Regsitered User Can Submit Coupons. Please Log In / Sign
            Up First
          </h1>
          <Button.Group size="massive">
            <Link to="/auth/login">
              <Button icon labelPosition="left" color="blue">
                <Icon name="sign in" />
                Log In
              </Button>
            </Link>
            <Button.Or />
            <Link to="/auth/signup">
              <Button icon labelPosition="left" color="green">
                <Icon name="users" />
                Sign Up
              </Button>
            </Link>
          </Button.Group>
        </div>
      );
    }

    return (
      <div className="couponSubmitPage">
        <Header as="h2" icon textAlign="center">
          <Icon name="tag" circular color="orange" />
          <Header.Content>Coupon Submit Form</Header.Content>
        </Header>

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
              dropDownListItems: dropDownListItems
            }}
            enableReinitialize={true} // Must enable for autoupdate when redux state changed.
            validationSchema={couponSubmitFormValidator}
            onSubmit={(values, actions) => {
              console.log("Hello", values, actions);
              actions.setFieldValue("uploading", true);
              axios
                .put("/coupon/addCoupon", values, { withCredentials: true }) // For cross domain cookies must use "withCredentials: true"
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
            render={couponSubmitForm}
          />
        </div>
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

export default connect(mapStateToProps)(CouponSubmitPage);
