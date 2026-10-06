import React from 'react';
import projects from '../data/Projects';

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header" data-reveal>
          <p className="section-label">My work</p>
          <h2>My Projects</h2>
          <p className="projects-subtitle">
            Here are some of the projects I have worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card${index === 0 ? ' is-featured' : ''}`}
              key={project.title || index}
              data-reveal
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="project-content">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                {project.technologies?.length > 0 && (
                  <ul className="project-technologies" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="technology">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-buttons">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                      aria-label={`${project.title} on GitHub (opens in a new tab)`}
                    >
                      <span>GitHub</span>
                      <span className="arrow" aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn demo-btn"
                      aria-label={`${project.title} live demo (opens in a new tab)`}
                    >
                      <span>Live Demo</span>
                      <span className="arrow" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
