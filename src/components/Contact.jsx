import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">

        <div className="section-header">
          <p className="section-label">Get in touch</p>
          <h2>Contact <span>Me</span></h2>
        </div>

        <div className="contact-content">

          <div className="contact-text">
            <h3>Let's work together</h3>

            <p>
              I'm currently looking for opportunities to gain professional
              experience, work on real-world projects, and grow as a developer.
            </p>

            <a
              href="mailto:azizmounassef778@gmail.com"
              className="email-link"
            >
              azizmounassef778@gmail.com
            </a>
          </div>

          <div className="contact-card">

            <a
              href="mailto:azizmounassef778@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">@</div>

              <div>
                <span>Email</span>
                <strong>azizmounassef778@gmail.com</strong>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon">↗</div>

              <div>
                <span>Available for</span>
                <strong>Internships & Opportunities</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;