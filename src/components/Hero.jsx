function Hero() {
  return (
    <section className="hero-section bg-pattern" id="home">
      <div className="hero-glow"></div>
      
      <div className="container hero-content text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="heading-primary fade-up">
              Hi, I'm <span className="text-gradient">Tushar Babar</span>
            </h1>

            <p className="hero-text-p mx-auto fade-up delay-100">
              A passionate Frontend & React.js Developer focused on building dynamic, responsive, and highly interactive user interfaces.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 fade-up delay-200 mt-4 mb-5">
              <a href="/Tushar-b.pdf" className="btn-custom btn-primary-custom" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-download me-2"></i> Download Resume
              </a>
              <a href="#projects" className="btn-custom btn-outline-custom">
                <i className="bi bi-code-slash me-2"></i> View Projects
              </a>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-2 fade-up delay-300">
              <span className="skill-badge"><i className="bi bi-braces text-info"></i> React</span>
              <span className="skill-badge"><i className="bi bi-server text-success"></i> Node.js</span>
              <span className="skill-badge"><i className="bi bi-cup-hot-fill text-danger"></i> Java</span>
              <span className="skill-badge"><i className="bi bi-database text-warning"></i> Spring Boot</span>
              <span className="skill-badge"><i className="bi bi-hdd-network text-primary"></i> REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
