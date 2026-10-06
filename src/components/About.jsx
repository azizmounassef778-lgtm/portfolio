import React from 'react';

const pillars = [
  ['01', 'Learn', 'Always curious and ready to learn new technologies.'],
  ['02', 'Build', 'Turning ideas into functional and useful web projects.'],
  ['03', 'Improve', 'Continuously improving my skills and solving problems.'],
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-container">
        <div className="section-header" data-reveal>
          <p className="section-label">Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text" data-reveal>
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

          <ol className="about-card">
            {pillars.map(([num, title, text], i) => (
              <li
                className="about-card-item"
                key={title}
                data-reveal
                style={{ '--d': `${i * 90}ms` }}
              >
                <span>{num}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
