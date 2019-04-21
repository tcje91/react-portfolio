import React from 'react';

const ProjectTile2 = ({ project, onClickProject }) => (
  <div className="project-tile-2" onClick={() => onClickProject(project)}>
    <img src={`/images/${project.imgMed ? project.imgMed : 'lemonade-lrg.png'}`} alt="img" className="project-img-2" />
    <p className="project-tile-title-2">{project.title}</p>
    <div className="tile-overlay" />
  </div>
);

export default ProjectTile2;
