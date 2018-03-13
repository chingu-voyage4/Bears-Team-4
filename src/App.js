import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrendingCard from "./Components/TrendingCard/TrendingCard";
import Main from "./Components/Main/Main";
import MainContent from "./Components/MainContent/MainContent";
import section1 from "./Models/demo"

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Hello</h1>
				<hr />
				<Main json={section1}/>
				<hr />
				<h1>Done</h1>
			</div>
		);
	}
}

export default App;
