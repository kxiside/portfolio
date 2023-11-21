
import React from 'react';
import './Skills.css';

const Skills = () => {
  // Define an array of skills
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <>
    <div className='skills'>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Skills;
