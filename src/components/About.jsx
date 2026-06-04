import TiltCard from "./TiltCard";

function About() {
  return (
    <section className="section-padding bg-light-2" id="about">
      <div className="container position-relative z-index-1">
        
        <h2 className="heading-secondary fade-up">About Me</h2>
        <p className="subtitle fade-up delay-100">
          A glimpse into my professional summary, career objectives, and academic background.
        </p>
        
        <div className="row g-4 mt-2">
          {/* Left Side - Profile Summary */}
          <div className="col-lg-6 fade-up delay-200">
            <TiltCard className="h-100 border-0 bg-transparent p-0 shadow-none">
              <div className="d-flex flex-column h-100">
                <h3 className="card-modern-title d-flex align-items-center gap-2 text-white">
                  <i className="bi bi-person-badge text-info fs-4"></i> Professional Summary
                </h3>
                <p className="card-modern-body mt-3">
                  I am a passionate <strong>Frontend & React.js Developer</strong> after completing my <strong>Bachelor of Computer Science (BCS)</strong>.
                </p>
                <p className="card-modern-body">
                  I enjoy working across the entire development stack — from designing clean, interactive user interfaces to developing robust and secure backend APIs. I am constantly expanding my knowledge of modern frameworks and architectural patterns.
                </p>
                <hr className="my-4 border-secondary opacity-25" />
                <h3 className="card-modern-title d-flex align-items-center gap-2 text-white">
                  <i className="bi bi-bullseye text-danger fs-4"></i> Career Objective
                </h3>
                <p className="card-modern-body mb-0">
                  To start my career as a Software Engineer where I can apply my skills to real-world projects, learn continuously from experienced professionals, and grow while contributing value to the organization.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Right Side - Education & Expertise */}
          <div className="col-lg-6">
            <div className="row g-4 h-100">
              
              <div className="col-12 fade-up delay-300">
                <TiltCard className="border-0 bg-transparent p-0 shadow-none">
                  <div>
                    <h3 className="card-modern-title d-flex align-items-center gap-2 text-white">
                      <i className="bi bi-mortarboard text-success fs-4"></i> Education
                    </h3>
                    <div className="d-flex flex-column gap-3 mt-4">
                      <div className="d-flex justify-content-between align-items-center p-3 glass-effect border-0 rounded-3">
                        <div>
                          <h4 className="fs-6 mb-1 text-white">BCS (Bachelor of Computer Science)</h4>
                          <span className="text-secondary small">Completed Successfully</span>
                        </div>
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              <div className="col-12 fade-up delay-400">
                <TiltCard className="border-0 bg-transparent p-0 shadow-none">
                  <div>
                    <h3 className="card-modern-title d-flex align-items-center gap-2 mb-3 text-white">
                      <i className="bi bi-lightning-charge text-warning fs-4"></i> Key Expertise
                    </h3>
                    <p className="card-modern-body">
                      Core strengths built through active project development and university studies:
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <span className="skill-badge">Frontend Dev</span>
                      <span className="skill-badge">Backend Architecture</span>
                      <span className="skill-badge">Relational Databases</span>
                      <span className="skill-badge">RESTful APIs</span>
                      <span className="skill-badge">Problem Solving</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
