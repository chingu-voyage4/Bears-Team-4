import React, { Component } from "react";
import "./Menu.css"

class Menu extends Component{
    render(){
        return (
            <div className="menu">
                <ul>
                    <li>Cash Back</li>
                    <li>Gift Card Deals</li>
                    <li>Near Me</li>
                    <li>Spring Deals</li>
                    <li>Departments &nbsp;<i className="fas fa-angle-down"></i></li>
                    <li>Explore &nbsp;<i className="fas fa-angle-down"></i></li>
                </ul>
            </div>
        );
    }
}

export default Menu;