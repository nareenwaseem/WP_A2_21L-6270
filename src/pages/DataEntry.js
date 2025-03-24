import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const DataEntry = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        bio: "",
        profilePic: "",
        skills: "",
        projects: [],
        socialLinks: [{ name: "", url: "" }]
    });

    const handleAddSocial = () => {
        setData({ ...data, socialLinks: [...data.socialLinks, { name: "", url: "" }] });
    };

    const handleChange = (e, index = null) => {
        const { name, value } = e.target;
        if (index !== null) {
            const updatedLinks = [...data.socialLinks];
            updatedLinks[index][name] = value;
            setData({ ...data, socialLinks: updatedLinks });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = () => {
        localStorage.setItem("portfolioData", JSON.stringify(data));
        navigate('/portfolio');
    };

    return (
        <div className="data-entry">
            <h2>Enter Portfolio Data</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <textarea name="bio" placeholder="Bio" onChange={handleChange} />
            <input type="text" name="profilePic" placeholder="Profile Picture URL" onChange={handleChange} />
            <input type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} />

            {data.socialLinks.map((link, index) => (
                <div key={index}>
                    <input type="text" name="name" placeholder="Platform Name" onChange={(e) => handleChange(e, index)} />
                    <input type="text" name="url" placeholder="Profile URL" onChange={(e) => handleChange(e, index)} />
                </div>
            ))}
            <button onClick={handleAddSocial}>Add Social Media</button>
            <button onClick={handleSubmit}>Generate Portfolio</button>
        </div>
    );
};

export default DataEntry;
