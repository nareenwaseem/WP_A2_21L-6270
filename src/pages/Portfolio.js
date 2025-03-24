import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("portfolioData"));
        if (storedData) {
            setPortfolioData(storedData);
        }
    }, []);

    if (!portfolioData) return <p>Loading...</p>;

    return (
        <div>
            <Navbar />
            <DarkModeToggle />
            <Hero name={portfolioData.name} bio={portfolioData.bio} />
            <About profilePic={portfolioData.profilePic} skills={portfolioData.skills.split(",")} description={portfolioData.bio} />
            <Projects />
            <Contact />
            <Footer socialLinks={portfolioData.socialLinks} />
        </div>
    );
};

export default Portfolio;
