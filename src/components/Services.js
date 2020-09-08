import React, { Component } from 'react';
import Title from './Title';
import { FaCar, FaShip, FaMoneyCheckAlt } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        key: 1,
        icon: <FaCar />,
        title: 'Foreign Car Purchase',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
      {
        key: 2,
        icon: <FaShip />,
        title: 'International Shipment',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
      {
        key: 3,
        icon: <FaMoneyCheckAlt />,
        title: 'Low Cost',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className='service'>
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
