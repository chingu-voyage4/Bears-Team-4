import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrendingCard from "./Components/TrendingCard/TrendingCard";
import MainContent from "./Components/MainContent/MainContent";

const section1 = {
	smallCard: [
		{
			smallCardText:"Up to 30% Off With Amazon Coupon Codes And Promos",
			imageSrc:"../images/save.jpg"
		},
		{
			smallCardText:"Up to 30% Off With Amazon Coupon Codes And Promos",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"Up to 30% Off With Amazon Coupon Codes And Promos",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"Up to 30% Off With Amazon Coupon Codes And Promos",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"Up to 30% Off With Amazon Coupon Codes And Promos",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"Up to 30% Off With Amazon Coupon Codes And Promos",
			imageSrc:"../../images/save.jpg"
		},
	]
};

class App extends Component {
	render() {
		return (
			<div className="container">
				<TrendingCard title="Random Text" subtitle="More Random Text" />
				<MainContent json={section1}/>
			</div>
		);
	}
}

export default App;
