import React, { useState } from "react";
import '../styles/styles.css';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div className="dark-mode-toggle">
            <span>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
            <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
