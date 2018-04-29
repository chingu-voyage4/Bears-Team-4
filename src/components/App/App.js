/**
 * Root component where all other components get rendered.
 * Main three parts are HEADER + ROUTE SPECIFIC PAGE + FOOTER
 **/

import { Route } from "react-router-dom";
import React, { Component } from "react";

import CategoryPage from "../CategoryPage/CategoryPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AuthPage from "../AuthPage/AuthPage";
import MainPage from "../MainPage/MainPage";
import SearchPage from "../SearchPage/SearchPage";
import StoresPage from "../StoresPage/StoresPage";
import CouponSubmitPage from "../CouponSubmitPage/CouponSubmitPage";
import AdminPage from "../AdminPage/AdminPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/stores/:storeName" component={StoresPage} />
        <Route path="/search/:term" component={SearchPage} />
        <Route path="/category/:categoryName" component={CategoryPage} />
        <Route path="/couponSubmit" component={CouponSubmitPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
