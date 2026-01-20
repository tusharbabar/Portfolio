
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="fade-in">
          Hi, I'm <span className="highlight">Tushar Babar</span>
        </h1>

        <p className="slide-up">
          Full Stack Developer | React | Node.js | Java | Spring Boot
        </p>

        <div className="hero-buttons slide-up">
          <a href="/Tushar-Babar.resume.pdf" className="btn primary">Download Resume</a>
          <a href="#projects" className="btn secondary">View Projects</a>
        </div>

        <div className="skills-mini fade-in">
          <span>React</span>
          <span>Node.js</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>REST APIs</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
