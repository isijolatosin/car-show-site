import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <>
      <Hero hero='contactHero'>
        <Banner
          title='CAR | HUB'
          subtitle='Our mission is to deliver a delightful car-buying experience to our prospective customers'
        >
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <ContactInfo />
    </>
  );
};
export default Contact;
