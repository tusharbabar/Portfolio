import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Header */}
        <div className="about-header">
          <h2>About Me</h2>
          <p>
            I’m <span className="highlight">Tushar Babar</span>, a passionate
            <strong> Full Stack Developer</strong> focused on building
            modern, scalable web applications.
          </p>
        </div>

        {/* Content */}
        <div className="about-grid">

          {/* Left */}
          <div className="about-left glass-card">
            <h3>👨‍💻 Professional Summary</h3>
            <p>
              I have completed my <strong>Bachelor of Computer Science (BCS)</strong>
              and I am currently pursuing my
              <strong> Master of Computer Applications (MCA)</strong>.
            </p>
            <p>
              I enjoy working across the full stack — from designing clean
              user interfaces to developing secure backend APIs.
            </p>
          </div>

          {/* Right */}
          <div className="about-right">

            <div className="glass-card">
              <h3>🎓 Education</h3>
              <ul className="education-list">
                <li>
                  <strong>MCA</strong>
                  <span>Currently Pursuing</span>
                </li>
                <li>
                  <strong>BCS</strong>
                  <span>Completed</span>
                </li>
              </ul>
            </div>

            <div className="glass-card mt-2 ">
              <h3>🛠 Skills</h3>
              <div className="skills-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>REST APIs</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>

          </div>
        </div>

        {/* Career Objective */}
        <div className="career-card glass-card">
          <h3>🎯 Career Objective</h3>
          <p>
            To start my career as a
            <strong> Software / Full Stack Developer</strong> where I can
            apply my skills to real-world projects, learn continuously,
            and grow as a professional developer.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
