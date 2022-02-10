import React from 'react';
import { HashLink } from 'react-router-hash-link';

class NavbarComponent extends React.Component {
  render() {
    return (
      <div class="navbar">
        <div class="navbar-item"><HashLink smooth to="/#">Home</HashLink></div>
        <div class="navbar-item"><HashLink smooth to="/#projects">Projects</HashLink></div>
        <div class="navbar-item"><HashLink smooth to="/#experience">Experience</HashLink></div>
        <div class="navbar-item"><HashLink smooth to="/#footer">Contact</HashLink></div>
      </div>
    )
  }
}

export default NavbarComponent;