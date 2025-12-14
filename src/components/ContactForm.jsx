import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="label" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="submit"
              value="Send Message"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
