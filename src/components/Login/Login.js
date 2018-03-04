import React, { Component } from "react";
import "./Login.css"

class Login extends Component{
    render(){
        return (
            <div className="login">
                <div className="login__photo">
                    <i className="far fa-user-circle"></i>
                </div>
                <div className="login__details">
                    <div className="login__details_login">Log In / Sign Up</div>
                    <div className="login__details_cashback">$0.00 Cash Back</div>
                </div>
                
            </div>
        );
    }
}

export default Login;