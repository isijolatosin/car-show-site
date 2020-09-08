import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import CarContainer from '../components/CarContainer';

const Cars = () => {
  return (
    <>
      <Hero hero='carsHero'>
        <Banner title='car gallery'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <CarContainer />
    </>
  );
};
export default Cars;
