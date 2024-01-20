import React from 'react';
import ProjectContainer from './project_container/ProjectContainer';
import projects from '../assets/projects/data.json';

export const ProjectsComponent = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <h3>Below is a selection of my projects, both academic and personal.</h3>
      <ProjectContainer data={projects} />
    </div>
  );
}

export default ProjectsComponent;