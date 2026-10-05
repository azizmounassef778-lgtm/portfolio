import React from 'react';
import projects from '../data/Projects';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2>My Projects</h2>

        <p className="projects-subtitle">
          Here are some of the projects I have worked on.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              {/* Project Content */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies?.map((tech, techIndex) => (
                    <span key={techIndex} className="technology">
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
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn demo-btn"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;