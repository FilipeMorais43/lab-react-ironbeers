import React, { Component } from 'react';
import { list } from './../../services/database';
import BeerItem from './../../components/BeerItem';

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
        <h1>List Beer</h1>
        {this.state.beers.map(beer => (
          <BeerItem key={beer._id} {...beer} />
        ))}
      </div>
    );
  }
}

export default ListBeer;
