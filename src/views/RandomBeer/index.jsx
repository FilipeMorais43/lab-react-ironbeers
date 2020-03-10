import React, { Component, Fragment } from 'react';
import { random as loadRandomBeer } from './../../services/database';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    loadRandomBeer()
      .then(beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { beer } = this.state;
    return (
      <div>
        <h1>RandomBeer</h1>
        {beer && (
          <Fragment>
            <figure>
              <img src={beer.image_url} alt={beer.name} />
            </figure>
            <div>
              <h1>
                {beer.name} {beer.attenuation_level}
              </h1>
              <p>
                {beer.tagline} {beer.first_brewed}
              </p>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default RandomBeer;
