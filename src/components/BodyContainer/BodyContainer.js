import React, { Component } from "react";
import "./BodyContainer.css"

import TrendingDeals from "../Trending/Trending";
import TopOffers from "../TopOffers/TopOffers";
import Populars from "../Populars/Populars";
import Subscribe from "../Subscribe/Subscribe";

class BodyContainer extends Component{
    render(){
        return (
            <div className="bodycontainer">
                <TrendingDeals/>
                <TopOffers/>
                <Populars/>
                <Subscribe/>
            </div>
        );
    }
}

export default BodyContainer;