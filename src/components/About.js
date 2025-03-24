import React from 'react';
import '../styles/styles.css';

const About = ({ profilePic, skills, description }) => {
    return (
        <section id="about" className="about">
            <img src={profilePic} alt="Profile" className="profile-pic"/>
            <h2>About Me</h2>
            <p>{description}</p>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </section>
    );
};

export default About;
