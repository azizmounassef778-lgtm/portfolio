import React from 'react';
import projects from '../data/Projects';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-header">
          <p className="projects-label">MY WORK</p>

          <h2>
            My <span>Projects</span>
          </h2>

          <p className="projects-subtitle">
            Here are some of the projects I have worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              {/* Project Image */}
              <div className="project-image-wrapper">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">

                <div>
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="technology"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                    >
                      <span>GitHub</span>
                      <span className="arrow">↗</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn demo-btn"
                    >
                      <span>Live Demo</span>
                      <span className="arrow">↗</span>
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