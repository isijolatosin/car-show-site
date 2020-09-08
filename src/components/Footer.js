import React, { Component } from 'react';
import {
  FaPhoneSquare,
  FaAddressCard,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        key: 1,
        icon: <FaPhoneSquare />,
        title: 'Phone Numbers',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
      {
        key: 2,
        icon: <FaAddressCard />,
        title: 'Email Address',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
      {
        key: 3,
        icon: (
          <>
            <FaFacebookSquare /> <FaInstagramSquare />
          </>
        ),
        title: 'Social Media',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
    ],
  };
  render() {
    return (
      <section className='footer'>
        <div className='footer-center'>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className='footer-item'>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
