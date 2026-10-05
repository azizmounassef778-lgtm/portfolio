import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-header">
          <p className="section-label">Get to know me</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Passionate about web development</h3>

            <p>
              I'm Aziz Mounassef, a Digital Development student with a strong
              interest in web development and modern technologies.
            </p>

            <p>
              I have practical knowledge of HTML, CSS, JavaScript, React,
              PHP, SQL and Python. I enjoy building web projects, learning
              new technologies, and improving my problem-solving skills.
            </p>

            <p>
              I'm currently looking for opportunities to gain professional
              experience, work on real-world projects, and grow as a developer.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-item">
              <span>01</span>
              <h4>Learn</h4>
              <p>Always curious and ready to learn new technologies.</p>
            </div>

            <div className="about-card-item">
              <span>02</span>
              <h4>Build</h4>
              <p>Turning ideas into functional and useful web projects.</p>
            </div>

            <div className="about-card-item">
              <span>03</span>
              <h4>Improve</h4>
              <p>Continuously improving my skills and solving problems.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;