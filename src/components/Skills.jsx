import React from 'react';

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'React.js', 'Bootstrap'],
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Python'],
    },
    {
      title: 'Database',
      skills: ['SQL', 'MySQL', 'Database Design'],
    },
    {
      title: 'Tools & Methods',
      skills: [
        'Git',
        'GitHub',
        'UML',
        'Agile Methodology',
        'Gantt',
        'PERT',
        'MPM',
        'Problem Solving',
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-header">
          <p className="section-label">What I work with</p>
          <h2>My <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;