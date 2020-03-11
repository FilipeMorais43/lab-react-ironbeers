import React, { Component } from 'react';
import { add } from './../../services/database';
import './style.scss';

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    };
  }

  handleChange = event => {
    const inputName = event.target.name;
    const value = event.target.value;

    console.log(inputName);

    this.setState({
      [inputName]: value
    });
  };

  addBeer() {
    add(this.state)
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.addBeer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Beer name"
        />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
          placeholder="Tagline"
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Description"
        />

        <label htmlFor="first_brewed">First brewed</label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
          placeholder="First brewed"
        />

        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
          placeholder="Brewers tips"
        />

        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level"
          value={this.state.attenuation_level}
          onChange={this.handleChange}
          placeholder="Attenuation level"
        />

        <label htmlFor="contributed_by">Contributed by</label>
        <input
          type="text"
          id="contributed_by"
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
          placeholder="Contributed by"
        />

        <button type="submit">Add New</button>
      </form>
    );
  }
}

export default NewBeer;
