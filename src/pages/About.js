import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import AboutInfo from '../components/AboutInfo';

const About = () => {
  return (
    <>
      <Hero hero='contactHero'>
        <Banner title='OUR DEFINITION OF CUSTOMER CARE'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <AboutInfo />
    </>
  );
};
export default About;
