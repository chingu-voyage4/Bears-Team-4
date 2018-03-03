import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrendingCard from './Components/TrendingCard/TrendingCard';

class App extends Component {
  render() {
    return (
      <TrendingCard title="Random Text" subtitle="More Random Text" />
    );
  }
}

export default App;
