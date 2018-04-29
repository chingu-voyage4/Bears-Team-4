/**
 * This component have three columns.
 * First and Last column just show same company logo and when hit 9500px first column logo hide and
 * second column logo wrap to next line.
 *
 * Middle column (.footer_links) contain all kind of links seperated into another 4 columns. When hit 950px those 4 columns
 * start to wrap to suit mobile view.
 **/

import { Link } from "react-router-dom";
import React, { Component } from "react";

import "./Footer.css";
import logo from "../../images/logoFooter.png";

/**
 * <div className="footer-overlay"> - Just to give full width white bar.
 **/
class Footer extends Component {
  render() {
    return (
      <div className="footer-overlay">
        <div className="footer">
          <div className="footer__logo1">
            <Link to="/" className="router-link-reset">
              <img src={logo} alt="RetailMeNot" className="footer__img" style={{maxWidth:"280px"}}/>
            </Link>
          </div>
          <div className="footer__links">
            <div className="footer__links__column">
              <div>CONNECT</div>
              <ul>
                <li>Help</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="footer__links__column">
              <div>GENERAL</div>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer__links__column">
              <div>SPECIALTY PAGES</div>
              <ul>
                <li>Black Friday Deals</li>
                <li>Cyber Monday Deals</li>
                <li>Mother's Day Deals</li>
                <li>Browse Departments</li>
              </ul>
            </div>
            <div className="footer__links__column">
              <div>ACCOUNTS</div>
              <ul>
                <li>My Account</li>
                <li>Community</li>
                <li>Submit a Coupon</li>
                <li>ChinguCoupons.Com</li>
              </ul>
            </div>
          </div>
          <div className="footer__logo2">
            <Link to="/" className="router-link-reset">
              <img src={logo} alt="RetailMeNot" className="footer__img" style={{maxWidth:"280px"}}/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
