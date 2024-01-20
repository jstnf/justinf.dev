import React from 'react';
import { HashLink } from 'react-router-hash-link';

export const NavbarComponent = () => {
  return (
    <div className="navbar">
      <NavbarItem title="Home" link="/#" />
      <NavbarItem title="About" link="/#about" />
      <NavbarItem title="Projects" link="/#projects" />
      <NavbarItem title="Experience" link="/#experience" />
      <NavbarItem title="Contact" link="/#contact" />
    </div>
  )
}

const NavbarItem = (props) => {
  return <div className="navbar-item"><HashLink smooth to={props.link}>{props.title}</HashLink></div>;
};

export default NavbarComponent;