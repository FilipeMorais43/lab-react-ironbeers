import React, { Component, Fragment } from 'react';
import { load as loadSingleBeer } from './../../services/database';
import './style.scss';

class SingleBeer extends Component {
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
    const id = this.props.match.params.id;
    loadSingleBeer(id)
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
      <div className="beer__item">
        <h1>SingleBeer</h1>
        {(beer && (
          <Fragment>
            <figure className="beer__image">
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
        )) ||
          ''}
      </div>
    );
  }
}

export default SingleBeer;
