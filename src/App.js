import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrendingCard from "./Components/TrendingCard/TrendingCard";
import MainContent from "./Components/MainContent/MainContent";

const section1 = {
	trendingCard: [
		{
			title:"Random Text",
			subtitle:"More Random Text",
			imageSrc:"../images/save.jpg",
			mainImageSrc:"../images/dices.jpg"
		},
		{
			title:"Random Text",
			subtitle:"More Random Text",
			imageSrc:"../images/save.jpg",
			mainImageSrc:"../images/dices.jpg"
		},
		{
			title:"Random Text",
			subtitle:"More Random Text",
			imageSrc:"../images/save.jpg",
			mainImageSrc:"../images/dices.jpg"
		}
	],
	smallTrendingCard: [
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
		}
	]
};

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
