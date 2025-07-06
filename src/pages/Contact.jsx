import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      e.target.submit();
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="book-shadow">
        <div className="contact-card">
          <div className="contact-left book-page">
            <h2 className="contact-heading">📘 Bishnudev Mahato</h2>
            <p className="title">Full Stack Developer</p>
            <div className="contact-info">
              <p><strong>📞</strong> 7899340981</p>
              <p><strong>📧</strong> bisundevmahato786@gmail.com</p>
              <p><strong>📍</strong> Bangalore, India</p>
            </div>
          </div>

          <div className="contact-right book-page">
            <h2 className="contact-heading">📬 Send Me a Message</h2>
            {submitted ? (
              <p className="thanks-msg">✅ Thank you! Your message has been sent.</p>
            ) : (
              <form
                action="https://formspree.io/f/xdkzwjbg"
                method="POST"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}

                <button type="submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
