function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-wrapper">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build modern web applications
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>Java</span>
              <span>Spring Boot</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Concepts</h3>
            <div className="skill-tags">
              <span>REST APIs</span>
              <span>Git & GitHub</span>
              <span>Postman</span>
              <span>JWT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
