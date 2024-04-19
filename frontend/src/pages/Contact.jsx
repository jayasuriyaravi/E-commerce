import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="container">
            <h1 className='text-center'> We would love to hear from you.</h1>
            <p className='text-center mb-5'>Fill out our form and we will contact you asap.</p>

            <form onSubmit={handleSubmit} className='border rounded-5 p-5 mb-5 ' >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input 
                        type="text"
                        className="form-control p-3 inp"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                        type="email"
                        className="form-control p-3 inp"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control  p-3 inp"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                        className="form-control  p-3 inp"
                        id="message"
                        rows="3"
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-form">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
