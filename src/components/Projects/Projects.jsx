import './Projects.css';
import ProjectCard from './ProjectCard'; // Uncomment this line if you have a ProjectCard component
import React from 'react';
// import ProjectCard from './ProjectCard'; // Uncomment this line if you have a ProjectCard component

const Projects = () => {
  // Define the data for the projects
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description for Project 1',
    },
    {
      title: 'Project 2',
      description: 'This is the description for Project 2',
    },
    // Add more projects as needed
  ];

  return (
    <div className='projects'>
      {projects.map((project, index) => (
        // Render a ProjectCard component for each project
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
