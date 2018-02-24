import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render = () => {
    return (
      <div className="header">
        <div className="header__top">
          <div>
            <h2>
              <a className="header__title" href="">
                CouponMeNow
              </a>
              <span class="fas fa-bars" />
            </h2>
          </div>
          <div className="header__search">
            <span class="fas fa-search" />
            <input
              className="header__search__input"
              type="text"
              placeholder="Search on CouponMeNow"
            />
          </div>
          <div>
            <button className="header__btn">
              <div className="header__btn__label">
                <span className="far fa-user-circle" />
                <b>Log In / Sign up</b>
              </div>
            </button>
          </div>
        </div>
        <div className="header__bottom">
          <div>
            <a href="">
              Departments <span class="fas fa-chevron-down" />
            </a>
          </div>
          <div>
            <a href="">
              Explore <span class="fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default Header;
