import React from 'react';
import './PortfolioItem.css';
import { Col, Row, Image, Grid } from 'react-bootstrap';

const portfolioItems = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Blocipedia.jpg')}
                alt="Blocipedia"
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/blocipedia-node"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://mouten57-blocipedia.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-desktop left" />
                </a>
                WikiSpot
                <i class="material-icons right">more_vert</i>
              </span>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                WikiSpot
                <i class="material-icons right">close</i>
              </span>
              <br />
              <br />
              <p>
                <h4>Timeline</h4>:<br />
                September 2018 - October 2018
                <br />
                <br />
                <h4>Description</h4>:
                <p>
                  WikiSpot is an application that allows users to create,
                  collaborate, and share wikis.
                </p>
                <br />➔ An application that allows users to create, collaborate,
                and share wikis. <br />➔ Payments handled with Stripe. <br />➔
                Sign-up emails sent with SendGrid.
              </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Bloccit.jpg')}
                alt="Bloccit"
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/bloccit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="http://mouten57-bloccit.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-desktop left" />
                </a>
                FamCHAT
                <i class="material-icons right">more_vert</i>
              </span>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                FamCHAT
                <i class="material-icons right">close</i>
              </span>
              <br />
              <br />
              <p>
                <h4>Timeline</h4>:<br />
                August 2018 - September 2018
                <br />
                <br />
                <h4>Description</h4>:
                <p>
                  FamCHAT is a reddit-style app that allows users to post,
                  comment, and vote on each others posts. It was built using an
                  MVC pattern and some features include authentication,
                  authorization, creating topics, posts, comments, favoriting,
                  and voting amongst others.
                </p>
                <br />➔ Authentication using Passport; Authorization using
                policies
                <br />➔ Handlers and middleware handled with Express <br />➔
                Views constructed with EJS <br />➔ All entries validated with
                express-validator <br />➔ Fully tested with TDD using Jasmine
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={require('../../images/Emaily.jpg')} />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/emaily"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://powerful-earth-60772.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-desktop left" />
                </a>
                Emaily
                <i class="material-icons right">more_vert</i>
              </span>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Emaily
                <i class="material-icons right">close</i>
              </span>
              <br />
              <br />
              <p>
                <h4>Timeline</h4>:<br />
                October 2018 - November 2018
                <br />
                <br />
                <h4>Description</h4>:<p>Emaily Info</p>
              </p>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Connect.jpg')}
                alt="Connect"
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/bloc-chat-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://outen-chat.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-desktop left" />
                </a>
                CONNECT
                <i class="material-icons right">more_vert</i>
              </span>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                CONNECT
                <i class="material-icons right">close</i>
              </span>
              <br />
              <br />
              <p>
                <h4>Timeline</h4>:<br />
                September 2018 - October 2018
                <br />
                <br />
                <h4>Description</h4>:
                <p>
                  CONNECT is a chatroom web app built using React and Firebase.
                </p>
                <br /> ➔ Google Authentication with Firebase <br />➔ Deletes all
                associated messages on room-delete (CASCADE-style delete) <br />
                ➔ Create/delete rooms, create/delete messages
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Stream.jpg')}
                alt="Stream"
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/bloc-jams-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://bloc-jams-mouten57.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-desktop left" />
                </a>
                Classic STREAM
                <i class="material-icons right">more_vert</i>
              </span>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Classic STREAM
                <i class="material-icons right">close</i>
              </span>
              <br />
              <br />
              <p>
                <h4>Timeline</h4>:<br />
                September 2018 - October 2018
                <br />
                <br />
                <h4>Description</h4>:
                <p>
                  Classic STREAM is a music-streaming app built using React,
                  react-router, and react-bootstrap. .
                </p>
                <br />➔ Styled using react-bootstrap <br />➔ App routed using
                react-router
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default portfolioItems;
