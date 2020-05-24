import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  state = {
    toggleActive: false,
  }

  toggleButtonHndler = () => {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  render() {
    return (
      <nav className="visible navbar nav-in">
        <div className="logo" />

        <div className="toggle-btn visible nav-link" onClick={this.toggleButtonHndler}>
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

          <div className={`menu-container ${this.state.toggleActive ? 'active' : ''}`}>
            <ul className="user-menu">
              <li><span className="user-menu-link">Vision</span></li>
              <li><span className="user-menu-link">Technology</span></li>
              <li><span className="user-menu-link">Experience it</span></li>
              <li><span className="user-menu-link">Sign in</span></li>
            </ul>
          </div>
        </div>

      </nav>
    );
  }
}

export default Nav;
