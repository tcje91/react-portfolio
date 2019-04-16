import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

const ProjectDetails = ({ onCloseProject, show, project }) => (
  <div className={`project-details ${show ? 'show' : ''}`}>
    {project && (
    <div>
      <div className="img-wrapper-med">
        <img src={`/images/${project.imgMed ? project.imgMed : 'lemonade-med.png'}`} alt="img" className="project-img-med" />
      </div>
      <h1 className="project-title">{project.title}</h1>
      <p className="project-desc">{project.desc ? project.desc : project.descTest}</p>
      <div className="tech-list">
        {project.techList.map(tech => <FontAwesomeIcon icon={BrandIcons[tech]} key={tech} className="icon" size="2x" />)}
      </div>
      <div className="close-btn" onClick={onCloseProject}>
        <div className="line one" />
        <div className="line two" />
      </div>
    </div>
    )}
  </div>
);

export default ProjectDetails;
