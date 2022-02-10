import React from 'react';

import Header from '../components/component_header';
import NavbarComponent from '../components/component_navbar';
import RandomExperience from '../components/component_randomexperience';
import ProjectsComponent from '../components/component_projects';
import ExperienceComponent from '../components/component_experience';
import Footer from '../components/component_footer';

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