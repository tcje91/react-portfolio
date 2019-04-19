import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import BrandIcons from '../misc/icons';

const ProjectDetails = ({ onCloseProject, show, project }) => (
  <div className={`project-details ${show ? 'show' : ''}`}>
    {project && (
    <div>
      <div className="img-wrapper-med">
        <img src={`/images/${project.imgMed ? project.imgMed : 'lemonade-med.png'}`} alt="img" className="project-img-med" />
      </div>
      <h1 className="project-title">{project.title}</h1>
      <p className="tech-list">{project.techListStr}</p>
      <p className="project-desc">{project.desc ? project.desc : project.descTest}</p>
      <div className="url-icons-wrapper">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={BrandIcons.faGithub} className="icon" size="2x" /></a>}
        {project.hostedUrl && <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={SolidIcons.faExternalLinkAlt} className="icon" size="2x" /></a>}
      </div>
      <div className="tech-list-icons">
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
