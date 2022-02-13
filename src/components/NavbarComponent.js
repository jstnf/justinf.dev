import React from 'react';
import { HashLink } from 'react-router-hash-link';

class NavbarComponent extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item"><HashLink smooth to="/#">Home</HashLink></div>
        <div className="navbar-item"><HashLink smooth to="/#projects">Projects</HashLink></div>
        <div className="navbar-item"><HashLink smooth to="/#experience">Experience</HashLink></div>
        <div className="navbar-item"><HashLink smooth to="/#contact">Contact</HashLink></div>
      </div>
    )
  }
}

export default NavbarComponent;