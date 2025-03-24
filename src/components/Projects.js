import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/nareenwaseem/repos")
            .then((res) => res.json())
            .then((data) => {
                const projectData = data.map((repo) => ({
                    title: repo.name,
                    description: repo.description,
                    image: "https://www.tandempm.ie/wp-content/uploads/placeholder.png",
                    githubLink: repo.html_url
                }));
                setProjects(projectData);
            });
    }, []);

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
