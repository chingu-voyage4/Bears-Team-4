import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrendingCard from "./Components/TrendingCard/TrendingCard";
import MainContent from "./Components/MainContent/MainContent";
import section1 from "./Models/demo"

class App extends Component {
	render() {
		return (
			<div className="container">
				<MainContent json={section1}/>
			</div>
		);
	}
}

export default App;
