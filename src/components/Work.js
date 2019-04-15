import React, { Component } from 'react';
import { projects } from '../data';
import ProjectTile from './ProjectTile';
import ProjectDetails from './ProjectDetails';

class Work extends Component {
  state = {
    selectedProject: null,
  }

  onClickProject = (project) => {
    this.setState({ selectedProject: project });
  }

  onCloseProject = () => {
    this.setState({ selectedProject: null });
  }

  render() {
    const { selectedProject } = this.state;
    return (
      <div className="work content-container">
        <h1 className="lrg-heading">
          My
          {' '}
          <span className="text-highlight">Work</span>
        </h1>
        <h3 className="med-heading">Some of my recent projects</h3>
        <div className="project-showcase">
          {projects.map(project => <ProjectTile key={project.id} project={project} onClickProject={this.onClickProject} />)}
        </div>
        <div className={`overlay ${selectedProject ? 'show' : ''}`} />
        <div className={`popup-container ${selectedProject ? 'show' : ''}`}>
          <ProjectDetails onCloseProject={this.onCloseProject} show={!!selectedProject} project={selectedProject} />
        </div>
      </div>
    );
  }
}

export default Work;
