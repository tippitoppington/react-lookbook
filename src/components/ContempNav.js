import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/main.css';
import '../css/header-style.css';

const ContempNav = () => {
  return (
    <>
      <div className='contemp-nav-container sticky'>
        <div className='contemp-nav m'>
          <div className='contemp-primary'>
            <button className='title'>Contemporary</button>
            <div className='depts'>
              <button className='active'>Women</button>
              <button>Men</button>
            </div>
          </div>
          <div className='contemp-secondary'>
            <NavLink exact activeClassName='active' to='/inspo'>
              <button type='button'>Style Inspo</button>
            </NavLink>

            {/* <NavLink exact activeClassName='active' to='/look'>
              <button type='button'>Create a Look</button>
            </NavLink> */}

            <NavLink exact activeClassName='active' to='/'>
              <button type='button'>Lookbook</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContempNav;
