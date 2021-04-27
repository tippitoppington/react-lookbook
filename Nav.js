import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const link = {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'black',
    padding: '14px 28px',
    borderRadius: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '20px',
  };
  return (
    <div>
      <nav style={{ backgroundColor: 'crimson', padding: '30px' }}>
        <Link style={link} to='/'>
          Home
        </Link>
        <Link style={link} to='/about'>
          About
        </Link>
        <Link style={link} to='/contact'>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
