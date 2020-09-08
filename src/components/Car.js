import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import PropTypes from 'prop-types';

export default function Car({ car }) {
  const { name, images, slug, price } = car;

  return (
    <article className='car'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single-car' />
        <div className='price-bottom'>
          <p>starting from</p>
          <h6>${price}</h6>
        </div>
        <Link to={`/cars/${slug}`} className='btn-primary car-link'>
          Features
        </Link>
      </div>
      <p className='car-info'>{name}</p>
    </article>
  );
}

Car.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
