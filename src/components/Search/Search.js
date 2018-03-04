import React, { Component } from "react";
import "./Search.css"

class Header extends Component{
    render(){
        return (
            <div className="search">
                <input className="search__input" type="text" placeholder="Search on RetailMeNot" />
            </div>
        );
    }
}

export default Header;