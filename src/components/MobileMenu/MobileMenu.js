import React, { Component } from "react";
import "./MobileMenu.css";
import Login from "../Login/Login";


class MobileMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen : false
    };
  }

  toggleMenu(){
      this.setState({
        menuOpen : !this.state.menuOpen
      });
  }

  render() {
    var menuStyle = {
      display : this.state.menuOpen ? "block" : "none"
    };

    return (
      <div className="mobileMenu">
        <a onClick={this.toggleMenu.bind(this)}>
          {this.state.menuOpen 
            ? <svg aria-hidden="true" data-prefix="far" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-times-circle fa-w-16"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg> 
            : <svg aria-hidden="true" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bars fa-w-14"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>  
          }
        </a>
        <ul className="mobileMenu__list" style={menuStyle}>
          <li className="mobileMenu__list__login"><Login/></li>
          <li>Cash Back</li>
          <li>Gift Card Deals</li>
          <li>Near Me</li>
          <li>Spring Deals</li>
          <li>
            Departments &nbsp;<i className="fas fa-angle-down" />
          </li>
          <li>
            Explore &nbsp;<i className="fas fa-angle-down" />
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileMenu;
