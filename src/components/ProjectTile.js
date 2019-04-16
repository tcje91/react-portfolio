import React from 'react';

const ProjectTile = ({ project, onClickProject }) => (
  <div className="project-tile" onClick={() => onClickProject(project)}>
    {/* <div className="project-img-div" /> */}
    <div className="img-container">
      <div className="img-overlay" />
      <img src={`/images/${project.imgSml ? project.imgSml : 'lemonade-sml.png'}`} alt="img" className="project-img" />
    </div>
    <p className="project-tile-title">{project.title}</p>
  </div>
);

export default ProjectTile;
