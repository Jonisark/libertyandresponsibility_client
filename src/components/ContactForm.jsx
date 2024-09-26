import React, { useState } from 'react';
import '../css/contactForm.css';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(`https://liberty-responsibility-backend.onrender.com/api/contact`, formData,
                    {headers: {
                        'Content-Type': 'application/json'
                    }}
                );
                if (response.status === 200) {
                    setSuccessMessage('✔ Message Sent Successfully!');
                    console.log('Form submitted successfully');
                    // Reset form fields
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                }
            } catch (error) {
                console.error('There was an error submitting the form:', error);
                setSuccessMessage('❌ Error sending message.');
            }
        } else {
            setSuccessMessage(''); // Clear success message on validation failure
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Get In Touch</h3>
                        <h2>Contact for any query</h2>
                    </div>
                    <div className="contact-img">
                        <img src='img\IMG_20240924_121947.jpg' alt="Image" />
                    </div>
                    <div className="contact-form">
                        {successMessage && <div className="sent text-success">{successMessage}</div>}
                        <form name="sentMessage" id="contactForm" onSubmit={handleSubmit} noValidate>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete='name' required />
                                <p className="text-danger">{errors.name}</p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} autoComplete='email' required />
                                <p className="text-danger">{errors.email}</p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                <p className="text-danger">{errors.subject}</p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                <p className="text-danger">{errors.message}</p>
                            </div>
                            <div>
                                <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
