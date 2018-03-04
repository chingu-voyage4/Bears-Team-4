import React, { Component } from "react";
import "./BodyContainer.css"

import TrendingDeals from "../Trending/Trending";
import TopOffers from "../TopOffers/TopOffers";
import Populars from "../Populars/Populars";

class BodyContainer extends Component{
    render(){
        return (
            <div className="bodycontainer">
                <TrendingDeals/>
                <TopOffers/>
                <Populars/>
            </div>
        );
    }
}

export default BodyContainer;