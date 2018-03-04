import React, { Component } from "react";
import "./BodyContainer.css"

import TrendingDeals from "../Trending/Trending"
import TopOffers from "../TopOffers/TopOffers"

class BodyContainer extends Component{
    render(){
        return (
            <div className="bodycontainer">
                <TrendingDeals/>
                <TopOffers/>
            </div>
        );
    }
}

export default BodyContainer;