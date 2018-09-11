import React, { Component } from 'react';
import './css/App.css';
import Landing from './Components/Landing';
import  Top  from './Components/Nav.js';
import AboutPage from './Components/AboutPage';
import PortfolioPage from './Components/PortfolioPage';
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Top />     
        <Landing />
        <AboutPage />
        <PortfolioPage />
        <Footer />
      </div>
    );
  }
}

export default App;
