import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav className="visible navbar nav-in">
    <div className="logo" />

    <div className="toggle-btn visible nav-link">
      <span />
      <span />
      <span />
    </div>

    <div className="nav-items nav-right">
      <div className="options">
        <div className="avi">
          <img className="pishicon" src={localStorage.getItem('avatar')} alt="" />
        </div>
      </div>

      <a href="login.html" className="user visible nav-link logout active">Vision</a>
      <a href="login.html" className="user visible nav-link logout">Technology</a>
      <a href="login.html" className="user visible nav-link logout">Experience it</a>
      <a href="login.html" className="user visible nav-link logout">Sign in</a>

      <div className="menu-container">
        <ul className="user-menu">
          <li><span className="user-menu-link">Log Out</span></li>
        </ul>
      </div>
    </div>

  </nav>
);

export default Nav;
