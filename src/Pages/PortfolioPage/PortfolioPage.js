import './PortfolioPage.css';
import React, { Component } from 'react';
import PortfolioItem from '../../Components/PortfolioItem';

class PortfolioPage extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="content-grid">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
            <PortfolioItem />
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
