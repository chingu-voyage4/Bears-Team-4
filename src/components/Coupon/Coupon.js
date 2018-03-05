import React, { Component } from "react";
import "./Coupon.css";

class Coupon extends Component {
  render() {
    return (
      <div className="coupon">
        <div className="coupon_image">
          <img
            alt=""
            src="https://www.retailmenot.com/thumbs/logos/l/internetandtv.att.com-coupons.jpg?versionId=_ODmb35r6kZ28npgXwMvI6Rwq1zHsacE"
          />
        </div>
        <div className="coupon_details">
          <div class="type">Sale</div> -
          <div class="category">Internet</div>
          <div class="offer">$400 Reward Card + TV/Internet $65/mo</div>
        </div>
        <div className="coupon_buttons">
          <div class="saveButton">
            <i class="far fa-star" /> Save
          </div>
          <div class="showButton">Show Code</div>
        </div>
        <div className="coupon_moreDetails">
          More Details &nbsp; <i className="fas fa-angle-down" />
        </div>
      </div>
    );
  }
}

export default Coupon;
