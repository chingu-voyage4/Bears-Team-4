import React, { Component } from "react";
import "./TopOffersItem.css"

class TopOffersItem extends Component{
    render(){
        return (
            <div className="TopOffersItem">
                <div className="TopOffersItem_image">
                    <img src="https://www.retailmenot.com/thumbs/logos/l/internetandtv.att.com-coupons.jpg?versionId=_ODmb35r6kZ28npgXwMvI6Rwq1zHsacE"/>
                </div>
                <div className="TopOffersItem_details">
                    <div class="type">Sale</div> -
                    <div class="category">Internet</div>
                    <div class="offer">$400 Reward Card + TV/Internet $65/mo</div>
                </div>
                <div className="TopOffersItem_buttons">
                    <div class="saveButton"><i class="far fa-star"></i> Save</div>
                    <div class="showButton">Show Code</div>
                </div>
                <div className="TopOffersItem_moreDetails">
                    More Details &nbsp; <i className="fas fa-angle-down"></i>
                </div>
            </div>
        );
    }
}

export default TopOffersItem;