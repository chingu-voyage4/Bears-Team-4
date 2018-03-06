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

  toggleDetails() {
    this.setState({
      detailsOpen: !this.state.detailsOpen
    });
  }

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
    var couponDetailsShowHide = {
      display: this.state.detailsOpen ? "block" : "none"
    };
    {
      console.log(this.showHideTab("comments"));
    }
    return (
      <div className="couponDetails">
        <div className="couponDetails__head">
          <div onClick={this.toggleDetails.bind(this)}>
            More Details &nbsp;
            <i
              className={`fas fa-angle-${
                this.state.detailsOpen ? "up" : "down"
              }`}
            />
          </div>
          <div className="couponDetails__head__like">
            <i className="far fa-thumbs-up" /> &nbsp;{" "}
            <i className="far fa-thumbs-down" />
          </div>
        </div>
        <div className="couponDetails__expand" style={couponDetailsShowHide}>
          <div className="couponDetails__expand__tabs">
            <a
              onClick={this.changeTab.bind(this, "details")}
              className={this.state.selectedTab === "details" ? "active" : ""}
            >
              Details
            </a>
            <a
              onClick={this.changeTab.bind(this, "comments")}
              className={this.state.selectedTab === "comments" ? "active" : ""}
            >
              Comments
            </a>
          </div>
          <div className="couponDetails__expand__tabsInfo">
            <div
              className="couponDetails__expand__tabsInfo__details"
              style={this.showHideTab("details")}
            >
              <div>
                <span>Ends:</span> Tomorrow
              </div>
              <div>
                <span>Exclusions:</span> Exclusions Apply.
              </div>
              <div>
                <span>Details:</span> Get up to 50% off all cold weather styles
                for women, men, & kids. SHOP NOW
              </div>
            </div>
            <Comments showHide={this.showHideTab("comments")} />
          </div>
        </div>
      </div>
    );
  }
}

export default CouponDetails;
