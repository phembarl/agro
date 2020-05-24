import React from 'react';
import Nav from '../Nav';
import './Header.css';

const Header = () => (
  <div className="header">
    <Nav />
    <div className="header-content">
      <div className="flex-row-center m_hcc">
        <div className="header-content-container">
          <h1>Welcome To AgroCola</h1>
          <p>Digital Agriculture for tomorrows leaders</p>
        </div>
        <div className="header-content-image" />
      </div>
    </div>
  </div>
);

export default Header;
