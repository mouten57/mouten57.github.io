import './Footer.css';
import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <footer>
                <div className="content-grid">
                    <div>Made by <a href="https://github.com/mouten57" target="_blank" rel="noopener noreferrer">Matt</a> <span role="img" aria-label="heart">❤️</span></div>
                </div>
            </footer>
        );}
}
export default Footer;