import React, { Component } from "react";
import "./MainPage.css";
import TrendingDeals from "./Trending/Trending";
import TopOffers from "./TopOffers/TopOffers";
import Populars from "./Populars/Populars";
import Subscribe from "./Subscribe/Subscribe";

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <TrendingDeals />
        <TopOffers />
        <Populars />
        <Subscribe />
      </div>
    );
  }
}

export default MainPage;
