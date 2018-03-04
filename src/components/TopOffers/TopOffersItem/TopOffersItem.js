import React, { Component } from "react";
import "./TopOffersItem.css";

class TopOffersItem extends Component {
  render() {
    return (
      <div className="topOffersItem">
        <div className="topOffersItem_image">
          <img
            alt=""
            src="https://www.retailmenot.com/thumbs/logos/l/internetandtv.att.com-coupons.jpg?versionId=_ODmb35r6kZ28npgXwMvI6Rwq1zHsacE"
          />
        </div>
        <div className="topOffersItem_details">
          <div class="type">Sale</div> -
          <div class="category">Internet</div>
          <div class="offer">$400 Reward Card + TV/Internet $65/mo</div>
        </div>
        <div className="topOffersItem_buttons">
          <div class="saveButton">
            <i class="far fa-star" /> Save
          </div>
          <div class="showButton">Show Code</div>
        </div>
        <div className="topOffersItem_moreDetails">
          More Details &nbsp; <i className="fas fa-angle-down" />
        </div>
      </div>
    );
  }
}

export default TopOffersItem;
