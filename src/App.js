import React, { Component } from 'react';
import './css/App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Landing from './Pages/LandingPage/Landing';
import Top from './Components/Nav/Nav.js';
import AboutPage from './Pages/AboutPage/AboutPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import Footer from './Components/Footer/Footer';

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
