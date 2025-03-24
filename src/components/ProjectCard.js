import React from 'react';
import '../styles/styles.css';

const ProjectCard = ({ title, description, image, githubLink }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    );
};

export default ProjectCard;
