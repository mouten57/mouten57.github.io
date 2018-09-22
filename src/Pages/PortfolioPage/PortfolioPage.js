import './PortfolioPage.css';
import React, { Component } from 'react';
import PortfolioItem from '../../Components/PortfolioItem';
import portfolioItems from './portfolio-items';
import './style.scss';

class PortfolioPage extends Component {

    render() {
        return(
      <div className="portfolio-page">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
        }

export default PortfolioPage;