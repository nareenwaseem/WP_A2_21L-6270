import React, { useState } from 'react';
import '../styles/styles.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </nav>
    );
};

export default Navbar;
