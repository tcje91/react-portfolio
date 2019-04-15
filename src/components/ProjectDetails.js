import React from 'react';

const ProjectDetails = ({ onCloseProject, show, project }) => (
  <div className={`project-details ${show ? 'show' : ''}`}>
    <h1>{project ? project.title : 'no project'}</h1>
    <p>{project ? project.desc : 'no project'}</p>
    <button type="button" onClick={onCloseProject}>x</button>
  </div>
);

export default ProjectDetails;
