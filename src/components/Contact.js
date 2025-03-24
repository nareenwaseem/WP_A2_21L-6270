import React, { useState } from 'react';
import '../styles/styles.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
