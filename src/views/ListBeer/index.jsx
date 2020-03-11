import React, { Component } from 'react';
import { list } from './../../services/database';
import BeerItem from './../../components/BeerItem';
import './style.scss';

class ListBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();

    console.log(this.state.beers);
  }

  fetchData() {
    list()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="beer__list">
          {this.state.beers.map(beer => (
            <BeerItem key={beer._id} {...beer} />
          ))}
        </div>
        <h1>List Beer</h1>
      </div>
    );
  }
}

export default ListBeer;
