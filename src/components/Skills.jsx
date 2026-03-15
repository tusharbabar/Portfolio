function Skills() {
  return (
    <section className="section-padding bg-light-2" id="skills">
      <div className="container">
        
        <h2 className="heading-secondary fade-up">Technical Expertise</h2>
        <p className="subtitle fade-up delay-100">
          Technologies and tools I use to build robust and scalable applications
        </p>

        <div className="row g-4 mt-5">
          
          {/* Frontend */}
          <div className="col-md-6 col-lg-3 fade-up delay-100">
            <div className="card-modern text-center">
              <i className="bi bi-window-fullscreen fs-1 text-info mb-3 d-block"></i>
              <h3 className="card-modern-title">Frontend</h3>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                <span className="skill-badge">HTML/CSS</span>
                <span className="skill-badge">Bootstrap</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">React</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-6 col-lg-3 fade-up delay-200">
            <div className="card-modern text-center">
              <i className="bi bi-hdd-network fs-1 text-success mb-3 d-block"></i>
              <h3 className="card-modern-title">Backend</h3>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Express</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">Spring Boot</span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="col-md-6 col-lg-3 fade-up delay-300">
            <div className="card-modern text-center">
              <i className="bi bi-database fs-1 text-warning mb-3 d-block"></i>
              <h3 className="card-modern-title">Database</h3>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">SQL</span>
              </div>
            </div>
          </div>

          {/* Tools & Concepts */}
          <div className="col-md-6 col-lg-3 fade-up delay-400">
            <div className="card-modern text-center">
              <i className="bi bi-tools fs-1 text-danger mb-3 d-block"></i>
              <h3 className="card-modern-title">Tools/Concepts</h3>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                <span className="skill-badge">REST APIs</span>
                <span className="skill-badge">Git/GitHub</span>
                <span className="skill-badge">Postman</span>
                <span className="skill-badge">JWT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
