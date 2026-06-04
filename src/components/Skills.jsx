import TiltCard from "./TiltCard";

function Skills() {
  return (
    <section className="section-padding bg-light-2" id="skills">
      <div className="container">
        
        <h2 className="heading-secondary fade-up">Technical Expertise</h2>
        <p className="subtitle fade-up delay-100">
          Technologies and tools I use to build robust, scalable, and visually stunning applications.
        </p>

        <div className="row g-4 mt-2">
          
          {/* Frontend */}
          <div className="col-md-6 col-lg-3 fade-up delay-100">
            <TiltCard className="h-100 border-0 bg-transparent p-0 shadow-none">
              <div className="text-center">
                <div className="success-checkmark-wrapper mb-3" style={{ width: "70px", height: "70px" }}>
                  <i className="bi bi-window-fullscreen fs-3 text-info"></i>
                </div>
                <h3 className="card-modern-title text-white">Frontend</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                  <span className="skill-badge">HTML5 / CSS3</span>
                  <span className="skill-badge">Bootstrap 5</span>
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">React.js</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Backend */}
          <div className="col-md-6 col-lg-3 fade-up delay-200">
            <TiltCard className="h-100 border-0 bg-transparent p-0 shadow-none">
              <div className="text-center">
                <div className="success-checkmark-wrapper mb-3" style={{ width: "70px", height: "70px", borderColor: "var(--accent-secondary)", boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}>
                  <i className="bi bi-hdd-network fs-3 text-secondary" style={{ color: "var(--accent-secondary) !important" }}></i>
                </div>
                <h3 className="card-modern-title text-white">Backend</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Express.js</span>
                  <span className="skill-badge">Java OOP</span>
                  <span className="skill-badge">Spring Boot</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Database */}
          <div className="col-md-6 col-lg-3 fade-up delay-300">
            <TiltCard className="h-100 border-0 bg-transparent p-0 shadow-none">
              <div className="text-center">
                <div className="success-checkmark-wrapper mb-3" style={{ width: "70px", height: "70px", borderColor: "var(--accent-primary)", boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}>
                  <i className="bi bi-database fs-3 text-primary" style={{ color: "var(--accent-primary) !important" }}></i>
                </div>
                <h3 className="card-modern-title text-white">Database</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                  <span className="skill-badge">MySQL</span>
                  <span className="skill-badge">Relational SQL</span>
                  <span className="skill-badge">DB Optimization</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Tools & Concepts */}
          <div className="col-md-6 col-lg-3 fade-up delay-400">
            <TiltCard className="h-100 border-0 bg-transparent p-0 shadow-none">
              <div className="text-center">
                <div className="success-checkmark-wrapper mb-3" style={{ width: "70px", height: "70px", borderColor: "#f43f5e", boxShadow: "0 0 20px rgba(244, 63, 94, 0.3)" }}>
                  <i className="bi bi-tools fs-3 text-danger"></i>
                </div>
                <h3 className="card-modern-title text-white">Tools & Concepts</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                  <span className="skill-badge">REST APIs</span>
                  <span className="skill-badge">Git & GitHub</span>
                  <span className="skill-badge">Postman Client</span>
                  <span className="skill-badge">JWT Auth</span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
