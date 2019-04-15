import React from 'react';

const ProjectDetails = ({ onCloseProject, show, project }) => (
  <div className={`project-details ${show ? 'show' : ''}`}>
    <h1 className="project-title">{project ? project.title : 'no project'}</h1>
    <p className="project-desc">{project ? project.desc : 'no project'}</p>
    <div className="close-btn" onClick={onCloseProject}>
      <div className="line one" />
      <div className="line two" />
    </div>
  </div>
);

export default ProjectDetails;
