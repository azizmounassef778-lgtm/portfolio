import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Aziz <span>Mounassef</span>
          </h1>

          <h2>
            Digital Development Student
          </h2>

          <p className="hero-description">
            Motivated and curious Digital Development student with a strong
            interest in web development. I enjoy building web projects,
            learning new technologies, and improving my problem-solving skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;