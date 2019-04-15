import React from 'react';

const ProjectTile = ({ project, onClickProject }) => (
  <div className="project-tile" onClick={() => onClickProject(project)}>
    <div className="project-img" />
    <p className="project-tile-title">{project.title}</p>
  </div>
);

export default ProjectTile;
