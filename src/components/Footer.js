import React from 'react';
import '../styles/styles.css';

const Footer = ({ socialLinks }) => {
    return (
        <footer>
            {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                </a>
            ))}
        </footer>
    );
};

export default Footer;
