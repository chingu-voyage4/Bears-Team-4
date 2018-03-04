import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrendingCard from "./Components/TrendingCard/TrendingCard";
import MainContent from "./Components/MainContent/MainContent";

const section1 = {
	trendingCard: [
		{
			title:"Free Sample-Filled Tote",
			subtitle:"Saks Fifth Avenue Code",
			imageSrc:"../images/save.jpg",
			mainImageSrc:"../images/dices.jpg"
		},
		{
			title:"Extra 25% off",
			subtitle:"Lord & Taylor Code",
			imageSrc:"../images/save.jpg",
			mainImageSrc:"../images/dices.jpg"
		},
		{
			title:"Online Only! 15% off $75",
			subtitle:"Food Locker Code",
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
			smallCardText:"Extra 25% Off Sale Styles",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"Up to 25% Off In-Stores and Online",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"Up to 80% Off Women's Shoes",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"40% Off Regular Menu Price Pizzas",
			imageSrc:"../../images/save.jpg"
		},
		{
			smallCardText:"30% Off When You Use Your Kohls Charge Card",
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
