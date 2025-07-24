import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', { // Change URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="contact py-5">
      <div className="container py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                <h1 className="text-primary">Get in touch</h1>
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional contact form with backend integration.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="h-100 rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: '400px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  className="w-100 form-control border-0 mb-4"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                  type="submit"
                >
                  Submit
                </button>
                {status && <p className="mt-3">{status}</p>}
              </form>
            </div>

            <div className="col-lg-5">
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Address</h4>
                  <p className="mb-2">123 Street New York, USA</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-2">info@example.com</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded bg-white">
                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-2">(+012) 3456 7890</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
