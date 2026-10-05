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

            <br />

            <a
              href="https://www.linkedin.com/in/aziz-mounassef-038724363/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact-card">

            {/* Email */}
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aziz-mounassef-038724363/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">in</div>

              <div>
                <span>LinkedIn</span>
                <strong>Aziz Mounassef</strong>
              </div>
            </a>

            {/* Availability */}
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