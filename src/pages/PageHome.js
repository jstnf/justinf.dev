import React from 'react';

import Header from '../components/Header';
import NavbarComponent from '../components/NavbarComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import Footer from '../components/Footer';

export const PageHome = () => {
  return (
    <>
      <Header />
      <NavbarComponent />
      <ProjectsComponent />
      <Footer />
    </>
  );
};

export default PageHome;