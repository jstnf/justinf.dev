import React from 'react';

import Header from '../components/Header';
import NavbarComponent from '../components/NavbarComponent';
import RandomExperience from '../components/RandomExperience';
import ProjectsComponent from '../components/ProjectsComponent';
import ExperienceComponent from '../components/ExperienceComponent';
import Footer from '../components/Footer';

import Card from '../scripts/Card';

class PageHome extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavbarComponent />
        <RandomExperience />
        <ProjectsComponent />
        <ExperienceComponent />
        <Card title="Hello world" content="Hi there!" tags={[]} />
        <Footer />
      </>
    );
  }
}

export default PageHome;