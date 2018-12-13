import './AboutPage.css';
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="content-grid">
          <h1>About</h1>
          <div className="about-wrapper">
            <div className="about-content">
              <p>I like JavaScript and everything web.</p>
              <p>
                I love building awesome stuff. I stay close to the community and
                try to keep tabs with the pace at which the web is evolving. I
                also like to{' '}
                <a
                  href="http://mattsjourneytocode.wordpress.com"
                  target="_blank"
                >
                  <strong>blog</strong>
                </a>{' '}
                what I learn.
              </p>
              <p>
                My favorite thing about coding is being able to create something
                from an idea. When my wife had a baby recently, we needed a
                baby-poop tracking app (if you're a parent, you know what I'm
                talking about!), so I made one! I did something similar with my
                latest Captstone project,{' '}
                <b>
                  <a
                    href="https://texas-math-central.herokuapp.com"
                    target="_blank"
                  >
                    Texas Math Central
                  </a>
                </b>
                . I felt like I really wanted to understand the difference
                between React and EJS, so I made a v2 using EJS that you can
                find{' '}
                <a
                  href="https://texas-math-central-ejs.herokuapp.com/"
                  target="_blank"
                >
                  <b>here</b>
                </a>
              </p>
              <p>
                React, Node.js, EJS, MongoDB, Express, Bootstrap, Postgres, and
                Firebase are what I feel most comfortable with. But I'm always
                willing to learn more :)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutPage;
