import React, { Component } from 'react';
import { projects } from '../data';
import ProjectTile from './ProjectTile';

class Work extends Component {
  state = {
    selectedProject: null,
  }

  onClickProject = (project) => {
    this.setState({ selectedProject: project });
  }

  render() {
    const { selectedProject } = this.state;
    return (
      <div className="work content-container">
        <h1>Work</h1>
        <div className="project-showcase">
          {projects.map(project => <ProjectTile key={project.id} project={project} onClickProject={this.onClickProject} />)}
        </div>
        <div className={`overlay ${selectedProject ? 'show' : ''}`} />
      </div>
    );
  }
}

export default Work;
