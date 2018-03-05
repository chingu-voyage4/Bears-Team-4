import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import BodyContainer from "../BodyContainer/BodyContainer";
import Footer from "../Footer/Footer";
import LoginPage from "../LoginPage/LoginPage";
import StoresPage from "../StoresPage/StoresPage";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={BodyContainer} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/stores/:storeName" component={StoresPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
