import React, { Component } from "react";
import "./BodyContainer.css"

import TrendingDeals from "../Trending/Trending"

class BodyContainer extends Component{
    render(){
        return (
            <div className="bodycontainer">
                <TrendingDeals/>
                <div>adadasd</div>
            </div>
        );
    }
}

export default BodyContainer;