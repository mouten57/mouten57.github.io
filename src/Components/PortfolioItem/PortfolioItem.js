import React from 'react';
import './PortfolioItem.css';

const portfolioItems = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Blocipedia.jpg')}
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/blocipedia-node"
                  target="_blank"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://mouten57-blocipedia.herokuapp.com/"
                  target="_blank"
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
              <p>
                ➔ An application that allows users to create, collaborate, and
                share wikis. <br />➔ Payments handled with Stripe. <br />➔
                Sign-up emails sent with SendGrid.
              </p>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Bloccit.jpg')}
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a href="https://github.com/mouten57/bloccit" target="_blank">
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="http://mouten57-bloccit.herokuapp.com/"
                  target="_blank"
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
              <p>
                ➔ Authentication using Passport; Authorization using policies
                <br />➔ Handlers and middleware handled with Express <br />➔
                Views constructed with EJS <br />➔ All entries validated with
                express-validator <br />➔ Fully tested with TDD using Jasmine
              </p>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={require('../../images/Emaily.jpg')} />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a href="https://github.com/mouten57/emaily" target="_blank">
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://powerful-earth-60772.herokuapp.com/"
                  target="_blank"
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
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                src={require('../../images/Connect.jpg')}
              />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/bloc-chat-react"
                  target="_blank"
                >
                  <i class="fab fa-github left" />
                </a>
                <a href="https://outen-chat.herokuapp.com/" target="_blank">
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
              <p>
                ➔ Google Authentication with Firebase <br />➔ Deletes all
                associated messages on room-delete (CASCADE-style delete) <br />
                ➔ Create/delete rooms, create/delete messages
              </p>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={require('../../images/Stream.jpg')} />
            </div>

            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <a
                  href="https://github.com/mouten57/bloc-jams-react"
                  target="_blank"
                >
                  <i class="fab fa-github left" />
                </a>
                <a
                  href="https://bloc-jams-mouten57.herokuapp.com/"
                  target="_blank"
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
              <p>
                ➔ Styled using react-bootstrap <br />➔ App routed using
                react-router
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolioItems;
