import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const BeerItem = props => {
  return (
    <Link to={`${props._id}`}>
      <figure>
        <img src={props.image_url} alt={props.name} />
      </figure>
      <header>
        <h2>{props.name}</h2>
        <span>{props.tagline}</span>
        <p>Created by: {props.contributed_by}</p>
      </header>
    </Link>
  );
};

export default BeerItem;
