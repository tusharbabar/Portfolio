import TiltCard from "./TiltCard";

function Hero() {
  return (
    <section className="hero-section bg-pattern" id="home">
      <div className="hero-glow"></div>

      {/* Floating background geometric icons */}
      <i className="bi bi-hexagon bg-floating-shape float-slow" style={{ top: "15%", left: "10%", fontSize: "3rem" }}></i>
      <i className="bi bi-triangle bg-floating-shape float-delayed" style={{ top: "60%", left: "8%", fontSize: "2rem" }}></i>
      <i className="bi bi-circle bg-floating-shape float-slow" style={{ top: "25%", right: "12%", fontSize: "2.5rem" }}></i>
      <i className="bi bi-square bg-floating-shape float-delayed" style={{ top: "70%", right: "15%", fontSize: "1.8rem" }}></i>

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          {/* Left Column - Information */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <span className="category-badge mb-3 fade-up">
              {"Full-Stack Development"}
            </span>

            <h1 className="heading-primary mt-2 fade-up delay-100">
              {"Complete Solutions And Build"}<br />
              <span className="highlight-outline">
                {"Full-Stack Applications"}
              </span>
              <br />
              {"Easier Than Ever"}
            </h1>

            <p className="hero-text-p mx-auto mx-lg-0 mt-3 fade-up delay-200">
              {"I am Tushar Babar, a passionate Full-Stack Developer focused on building robust databases, secure backends, and highly interactive frontend interfaces. I enjoy writing performant code and shaping clean user experiences."}
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-4 fade-up delay-300 mt-4 mb-5">
              <a href="#contact" className="btn-custom btn-primary-custom py-3 px-4">
                {"Connect Now"}
              </a>
              <a href="/Tushar Babar Resume.pdf" className="btn-play-custom" target="_blank" rel="noopener noreferrer">
                <div className="play-icon-circle">
                  <i className="bi bi-file-earmark-arrow-down"></i>
                </div>
                <span>{"Get Resume"}</span>
              </a>
            </div>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 fade-up delay-400">
              <span className="skill-badge"><i className="bi bi-braces text-info"></i> React.js</span>
              <span className="skill-badge"><i className="bi bi-server text-success"></i> Node.js</span>
              <span className="skill-badge"><i className="bi bi-hdd-network text-primary"></i> REST APIs</span>
              <span className="skill-badge"><i className="bi bi-database text-warning"></i> SQL Databases</span>
              <span className="skill-badge"><i className="bi bi-cpu text-danger"></i> Spring Boot</span>
            </div>

            {/* Scroll Down Indicator - inside column flow */}
            <div className="d-none d-lg-flex align-items-center gap-2 mt-5 fade-up delay-400" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'var(--accent-primary)', animation: 'bounceArrow 2s infinite ease-in-out' }}>
                <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{"Scroll Down"}</span>
            </div>
          </div>

          {/* Right Column - 3D Interlocking Design Frame */}
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center pe-lg-4 fade-up delay-200">
            <TiltCard className="border-0 bg-transparent p-0 shadow-none">
              <div className="photo-frame-container">
                {/* Background Shapes */}
                <div className="photo-frame-bg-orange"></div>
                <div className="photo-frame-bg-teal"></div>

                {/* Foreground Portrait - flipped so hand points toward text */}
                <div className="photo-frame-portrait">
                  <img
                    src="/hero_developer.png"
                    alt="Tushar Babar Portrait"
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
