import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h4 className='logo-name'>
                car| <strong>HUB</strong>
              </h4>
              {/* <img src={logo} width='140' height='40' alt='Beach Resort' /> */}
            </Link>
            <button
              onClick={this.handleToggle}
              type='button'
              className='nav-btn'
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/browse-cars'>BROWSE CARS</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/contact-us'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
