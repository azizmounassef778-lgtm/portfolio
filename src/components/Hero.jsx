import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-status hero-in" style={{ '--d': '0ms' }}>
            <span className="status-dot" aria-hidden="true" />
            Open to internships &amp; opportunities
          </p>

          <p className="hero-greeting hero-in" style={{ '--d': '80ms' }}>
            Hello, I'm
          </p>

          <h1 className="hero-in" style={{ '--d': '160ms' }}>
            <span className="hero-first">Aziz</span>
            <span className="hero-last">Mounassef</span>
          </h1>

          <h2 className="hero-in" style={{ '--d': '280ms' }}>
            Digital Development Student
          </h2>

          <p className="hero-description hero-in" style={{ '--d': '360ms' }}>
            Motivated and curious Digital Development student with a strong
            interest in web development. I enjoy building web projects,
            learning new technologies, and improving my problem-solving skills.
          </p>

          <div className="hero-buttons hero-in" style={{ '--d': '440ms' }}>
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
