import React, { Component } from 'react';
import './styles.css';
import './themes/red-white.css';
import './themes/reset.css';
// import '../css/Landing.css';

class Landing extends Component {
    handleSelect(eventKey) {
    alert(`selected "${eventKey}"`);
    }
    render() {
        return(
            <body>
                <main>            
                    <div class="intro">Hello, I'm Matt!</div>
                    <div class="tagline">Web Developer | Veteran Teacher | Ultramarathon Runner</div>
                    <div class="icons-social">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mouten57"><i class="fab fa-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mouten1"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/story/9970614"><i class="fab fa-stack-overflow"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-outen-31104337/"><i class="fab fa-linkedin"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@outenmp"><i class="fab fa-medium"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://mattsjourneytocode.wordpress.com"><i class="fab fa-wordpress"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/mouten57"><i class="fab fa-codepen"></i></a>
                    </div>
                </main>
            </body>
        );}
}
export default Landing;