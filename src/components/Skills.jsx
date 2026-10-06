import React from 'react';

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

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-container">
        <div className="section-header" data-reveal>
          <p className="section-label">What I work with</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              className="skill-card"
              key={group.title}
              data-reveal
              style={{ '--d': `${i * 80}ms` }}
            >
              <div className="skill-card-head">
                <h3>{group.title}</h3>
                <span className="skill-count">{group.skills.length}</span>
              </div>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li className="skill-tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
