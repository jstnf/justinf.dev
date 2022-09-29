import React from 'react';

import Header from '../components/Header';
import NavbarComponent from '../components/NavbarComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import Footer from '../components/Footer';

class PageHome extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavbarComponent />
        <ProjectsComponent />
        <Footer />
      </>
    );
  }
}

export default PageHome;