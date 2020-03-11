import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const BeerItem = props => {
  return (
    <Link to={`${props._id}`} className="beer__item">
      <figure className="beer__image">
        <img src={props.image_url} alt={props.name} />
      </figure>
      <header className="beer__information">
        <h2>{props.name}</h2>
        <span>{props.tagline}</span>
        <p>Created by: {props.contributed_by}</p>
        <hr />
      </header>
    </Link>
  );
};

export default BeerItem;
