import React, { Component } from 'react';
import './Nav.css';
import { Nav, NavItem } from 'react-bootstrap';
import { toElement as scrollToElement } from '../../utils/scroll';

class Top extends Component {
  constructor(props) {
    super(props);
  }
  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }
  render() {
    return (
      <Nav bsStyle="tabs">
        <NavItem eventKey="About">
          <p
            className="menuItem"
            onClick={e => this.scrollToPage('.about-page')}
          >
            About
          </p>
        </NavItem>

        <NavItem eventKey="Portfolio" title="Item">
          <p
            className="menuItem"
            onClick={e => this.scrollToPage('.portfolio-page')}
          >
            Portfolio
          </p>
        </NavItem>
      </Nav>
    );
  }
}
export default Top;
