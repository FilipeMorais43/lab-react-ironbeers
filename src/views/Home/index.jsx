import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/beers">
          <figure>
            <img src="/images/beers.png" alt="beers" />
          </figure>
          <h1>Beers</h1>
          <p>Information</p>
        </Link>
        <Link to="/randomBeer">
          <figure>
            <img src="/images/random-beer.png" alt="random-beer" />
          </figure>
          <h1>Random Beers</h1>
          <p>Information</p>
        </Link>
        <Link to="/newBeer">
          <figure>
            <img src="/images/new-beer.png" alt="new-beer" />
          </figure>
          <h1>New Beers</h1>
          <p>Information</p>
        </Link>
      </Fragment>
    );
  }
}

export default Home;
