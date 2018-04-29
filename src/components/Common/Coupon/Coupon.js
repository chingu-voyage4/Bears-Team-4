/**
 * This component render CouponBox with details, comments, like,.....
 *
 * below "coupon__moreDetails" and right "coupon__buttons" part get hidden when hit <800px
 */

import React, { Component } from "react";

import CouponDetails from "./CouponDetails/CouponDetails";
import CouponModel from "./CouponModel/CouponModel";
import * as helpers from "../../../helpers/helperFunctions";

import "./Coupon.css";

class Coupon extends Component {
  state = {
    modalFns: {}
  };

  // Pass this fn to CouponModel and get inside functions of CouponModel to this parent component.
  // So we can control CouponModel outside of it here.
  getModalFns(fns) {
    this.setState({
      modalFns: fns
    });
  }

  // Execute CopuponModels inside functions here so we can open model here.
  handleModalOpen() {
    this.state.modalFns.setRedirect(false); // Hide Redirect Option on Bottom
    this.state.modalFns.showModel();
  }

  render() {
    const { coupon } = this.props;

    const modelBtn = (
      <div className="showButton">
        {coupon.kind === "deal" ? "Get Deal" : "Show Code"}
      </div>
    );

    return (
      <div className="coupon">
        <div className="coupon__store-image">
          <img alt={coupon.storeId.name} src={coupon.storeId.logoUrl} />
        </div>
        <div className="coupon__details">
          {/* This wrpaper only shown in <800px viewports */}
          <div
            className="coupon__details__wrapper"
            onClick={this.handleModalOpen.bind(this)}
          />
          <div className="coupon__details__type">
            {coupon.kind.toUpperCase()}
          </div>
          <div className="coupon__details__store">{coupon.storeId.name}</div>
          <div className="coupon__details__description">
            {helpers.limitCharacters(coupon.description, 50)}
          </div>
        </div>
        <div className="coupon__buttons">
          <div className="saveButton">
            <i className="far fa-star" /> Save
          </div>
          <CouponModel
            coupon={coupon}
            trigger={modelBtn}
            redirect={true}
            getModalOpenFn={this.getModalFns.bind(this)}
          />
        </div>
        <div className="coupon__moreDetails">
          <CouponDetails coupon={coupon} />
        </div>
      </div>
    );
  }
}

export default Coupon;
