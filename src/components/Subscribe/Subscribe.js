import React, { Component } from "react";
import "./Subscribe.css";

class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <div>Never miss another deal.</div>
        <br />
        <div>
          Get the top deals from 100s of retailers in the Best of RetailMeNot
          emails.
        </div>
        <br />
        <div className="subscribe_form">
          <input
            className="subscribe__email"
            type="text"
            placeholder="Email Address"
          />
          <div class="subscribe__showButton">Subscribe</div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
