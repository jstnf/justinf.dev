import React from 'react';

import Header from '../components/Header';
import NavbarComponent from '../components/NavbarComponent';
import RandomExperience from '../components/RandomExperience';
import ProjectsComponent from '../components/ProjectsComponent';
import ExperienceComponent from '../components/ExperienceComponent';
import Footer from '../components/Footer';

class PageHome extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavbarComponent />
        <RandomExperience />
        <ProjectsComponent />
        <ExperienceComponent />
        <Footer />
      </>
    );
  }
}

export default PageHome;