import React from 'react';

const ProjectDetails = ({ onCloseProject, show, project }) => (
  <div className={`project-details ${show ? 'show' : ''}`}>
    {project && <div className="img-wrapper-med"><img src={`/images/${project.imgMed ? project.imgMed : 'lemonade-med.png'}`} alt="img" className="project-img-med" /></div>}
    <h1 className="project-title">{project ? project.title : 'no project'}</h1>
    <p className="project-desc">{project ? project.desc : 'no project'}</p>
    <div className="close-btn" onClick={onCloseProject}>
      <div className="line one" />
      <div className="line two" />
    </div>
  </div>
);

export default ProjectDetails;
