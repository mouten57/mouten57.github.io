import './AboutPage.css';
import React, { Component } from 'react';

class AboutPage extends Component {

    render() {
        return(
            <div className="about-page">
                <div className="content-grid">
                    <h1>About</h1>
                    <div className="about-wrapper">
                        <div className="about-content">
                        <p>
                        I like JavaScript and everything web.
                        </p>
                        <p>
                        I love building awesome stuff. I stay close to
                        the community and try to keep tabs with the pace at which the web
                        is evolving. I also like to <a href='http://mattsjourneytocode.wordpress.com' target='_blank'><strong>blog</strong></a> what I learn.
                        </p>
                        <p>
                        I built this site from scratch.
                        By scratch, I mean <i>absolutely from scratch</i> without any UI library/framework
                        (except React though) and had so much fun along the way.
                        </p>
                        <p>
                        React, Node.js, Express, Bootstrap, Postgres, and Firebase are what I feel most comfortable with. I am also obsessed with making the web look pretty with SASS/CSS.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        );}
}
export default AboutPage;