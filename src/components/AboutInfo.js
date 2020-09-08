import React, { Component } from 'react';
import Title from './Title';
import { FaKey, FaServicestack, FaSmile } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        key: 1,
        icon: <FaKey />,
        title: 'What We Stand For',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
      {
        key: 2,
        icon: <FaServicestack />,
        title: 'What We Do',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
      {
        key: 3,
        icon: <FaSmile />,
        title: 'How We Make You Happy',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum?',
      },
    ],
  };
  render() {
    return (
      <section className='contact'>
        <Title title='About Us' />
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
