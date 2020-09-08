import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title='luxurious cars' subtitle='Luxury for comport'>
          <Link to='/browse-cars' className='btn-primary'>
            cars inventory
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedCars />
    </>
  );
};

export default Home;
