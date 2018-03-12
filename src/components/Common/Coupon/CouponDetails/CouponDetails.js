import React, { Component } from "react";
import "./CouponDetails.css";
import Comments from "../Comments/Comments";

class CouponDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsOpen: false,
      selectedTab: "details"
    };
  }

  // Toggle MoreDetails dropdown box
  toggleDropDown() {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    });
  }

  // Toggle which tab to show (details, comments)
  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

  showHideTab(tabName) {
    if (this.state.selectedTab === tabName) {
      return {
        display: "block"
      };
    } else {
      return { display: "none" };
    }
  }

  render() {
    const { coupon, comments } = this.props;

    return (
      <div className="coupon-details">
        {/* Always shown bar. Which use to toggle dropdown box */}
        <div className="coupon-details__head">
          <div
            className="coupon-details__head__more"
            onClick={this.toggleDropDown.bind(this)}
          >
            More Details &nbsp;
            <i
              className={`fas fa-angle-${
                this.state.detailsOpen ? "up" : "down"
              }`}
            />
          </div>
          {/* Like Buttons in always shown bar*/}
          <div className="coupon-details__head__like">
            <i className="far fa-thumbs-up" /> &nbsp;{" "}
            <i className="far fa-thumbs-down" />
          </div>
        </div>

        {/* dropDown - Only shown when "dropDownOpen" is true */}
        <div
          className="coupon-details__dropdown"
          style={{
            display: this.state.dropDownOpen ? "block" : "none"
          }}
        >
          <div className="coupon-details__dropdown__tab-links">
            {/* Details and Comments Tab Links - Used to toggle which tab to show*/}
            <a
              onClick={this.changeTab.bind(this, "details")}
              className={
                this.state.selectedTab === "details"
                  ? "dropdown__tab-links--active"
                  : ""
              }
            >
              Details
            </a>
            <a
              onClick={this.changeTab.bind(this, "comments")}
              className={
                this.state.selectedTab === "comments"
                  ? "dropdown__tab-links--active"
                  : ""
              }
            >
              Comments
            </a>
          </div>

          {/* Details and Comments Actual Tabs - Only shown "selectedTab"*/}
          <div className="coupon-details__dropdown__tabs">
            {/* Details Tab */}
            <div
              className="dropdown__tabs__details"
              style={this.showHideTab("details")}
            >
              <div>
                <span className="details__key">Ends</span> :{" "}
                <span className="details__value">{coupon.expireDate}</span>
              </div>
              <div>
                <span className="details__key">Details</span> :{" "}
                <span className="details__value">{coupon.description}</span>
              </div>
              {/* Conditionally rendering exclutions only if its available */}
              {coupon.exclutionDetails && (
                <div>
                  <span className="details__key">Exclusions</span> :{" "}
                  <span className="details__value">
                    {coupon.exclutionDetails}
                  </span>
                </div>
              )}
            </div>

            {/* Comments Tab */}
            <Comments
              className="dropdown__tabs__comments"
              // Passing show/hide styles as props
              showHide={this.showHideTab("comments")}
              comments={comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CouponDetails;
