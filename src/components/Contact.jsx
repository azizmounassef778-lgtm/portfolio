import React from 'react';

const EMAIL = 'azizmounassef778@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/aziz-mounassef-038724363/';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-container">
        <div className="section-header" data-reveal>
          <p className="section-label">Get in touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-text" data-reveal>
            <h3>Let's work together</h3>

            <p>
              I'm currently looking for opportunities to gain professional
              experience, work on real-world projects, and grow as a developer.
            </p>

            <a href={`mailto:${EMAIL}`} className="email-link">
              {EMAIL}
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn linkedin-link"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact-card" data-reveal style={{ '--d': '100ms' }}>
            <a href={`mailto:${EMAIL}`} className="contact-item">
              <div className="contact-icon" aria-hidden="true">@</div>
              <div>
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </div>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon" aria-hidden="true">in</div>
              <div>
                <span>LinkedIn</span>
                <strong>Aziz Mounassef</strong>
              </div>
            </a>

            <div className="contact-item is-static">
              <div className="contact-icon" aria-hidden="true">↗</div>
              <div>
                <span>Available for</span>
                <strong>Internships &amp; Opportunities</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
