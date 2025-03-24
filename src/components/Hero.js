import React from 'react';
import '../styles/styles.css';

const Hero = ({ name, bio }) => {
    return (
        <section className="hero">
            <h2>Welcome, I'm {name}!</h2>
            <p>{bio}</p>
            <a href="#projects" className="cta-button">View My Work</a>
        </section>
    );
};

export default Hero;
