import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import BodyContainer from "../BodyContainer/BodyContainer";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
