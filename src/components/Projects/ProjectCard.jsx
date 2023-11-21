import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;
