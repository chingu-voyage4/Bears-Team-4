import React, { Component } from "react";
import "./Subscribe.css"

class Subscribe extends Component{
    render(){
        return (
            <div className="Subscribe">
                <div>Never miss another deal.</div><br/>
                <div>Get the top deals from 100s of retailers in the Best of RetailMeNot emails.</div><br/>
                <input className="Subscribe__email" type="text" placeholder="Email Address" />
                <div class="Subscribe__showButton">Subscribe</div>
            </div>
        );
    }
}

export default Subscribe;