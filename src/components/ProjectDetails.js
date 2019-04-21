import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import BrandIcons from '../misc/icons';
import LinkIcon from './LinkIcon';

const ProjectDetails = ({ onCloseProject, show, project }) => (
  <div className={`project-details ${show ? 'show' : ''}`}>
    {project && (
    <div>
      <div className="img-wrapper-med">
        <img src={`/images/${project.imgMed ? project.imgMed : 'lemonade-lrg.png'}`} alt={`${project.title}`} />
      </div>
      <h1 className="project-title">{project.title}</h1>
      <p className="tech-list">{project.techListStr}</p>
      <p className="project-desc">{project.desc ? project.desc : project.descTest}</p>
      <div className="url-icons-wrapper">
        {project.githubUrl && <LinkIcon href={project.githubUrl} icon={BrandIcons.faGithub} />}
        {project.hostedUrl && <LinkIcon href={project.hostedUrl} icon={SolidIcons.faExternalLinkAlt} />}
        {project.youtubeUrl && <LinkIcon href={project.youtubeUrl} icon={BrandIcons.faYoutube} />}
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
