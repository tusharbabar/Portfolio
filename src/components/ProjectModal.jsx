import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  // Handle overlay click to close
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay-custom")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay-custom" onClick={handleOverlayClick}>
      <div className="modal-content-custom p-4 p-md-5">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="row g-4">
          {/* Visual Showcase */}
          <div className="col-12 col-lg-5">
            <div 
              className="position-relative rounded-4 overflow-hidden border border-secondary border-opacity-25 bg-dark d-flex align-items-center justify-content-center"
              style={{ minHeight: "220px", background: "linear-gradient(135deg, #0e172a, #1e1b4b)" }}
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ maxHeight: "250px" }}
                />
              ) : (
                <div className="text-center p-4">
                  <div className="success-checkmark-wrapper mb-3" style={{ width: "70px", height: "70px" }}>
                    <i className={`bi ${project.iconClass || 'bi-laptop'} fs-3 text-info`}></i>
                  </div>
                  <span className="text-secondary small d-block">Holographic Preview Loaded</span>
                </div>
              )}
            </div>

            {/* Tech Badges */}
            <div className="mt-4">
              <h4 className="fs-6 text-uppercase text-secondary mb-3 letter-spacing-05">Technologies Used</h4>
              <div className="d-flex flex-wrap gap-2">
                {project.techList ? project.techList.map((tech, idx) => (
                  <span key={idx} className="skill-badge py-1 px-3" style={{ fontSize: "0.85rem" }}>
                    {tech}
                  </span>
                )) : (
                  project.tech.split(",").map((tech, idx) => (
                    <span key={idx} className="skill-badge py-1 px-3" style={{ fontSize: "0.85rem" }}>
                      {tech.trim()}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-between">
            <div>
              <span className="text-gradient fw-bold small text-uppercase tracking-wider">PROJECT SHOWCASE</span>
              <h3 className="fs-2 mb-3 mt-1 fw-bold text-white">{project.title}</h3>

              {/* Goal */}
              <div className="mb-4">
                <h4 className="fs-6 text-uppercase text-secondary mb-2">Project Goal</h4>
                <p className="text-slate-300 fs-6 lh-base">{project.goal}</p>
              </div>

              {/* Core Features */}
              <div className="mb-4">
                <h4 className="fs-6 text-uppercase text-secondary mb-2">Key Features & Architectural Details</h4>
                <ul className="list-unstyled d-flex flex-column gap-2 text-slate-300" style={{ fontSize: "0.95rem" }}>
                  {project.features ? project.features.map((feat, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <i className="bi bi-patch-check text-info mt-1"></i>
                      <span>{feat}</span>
                    </li>
                  )) : (
                    <>
                      <li className="d-flex align-items-start gap-2">
                        <i className="bi bi-patch-check text-info mt-1"></i>
                        <span>Secure API integration with clean JSON payloads.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="bi bi-patch-check text-info mt-1"></i>
                        <span>Fully responsive CSS layout optimized for fluid dimensions.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <i className="bi bi-patch-check text-info mt-1"></i>
                        <span>Strict client-side input validations and state persistence.</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Engineering Challenges */}
              <div className="mb-4">
                <h4 className="fs-6 text-uppercase text-secondary mb-2">Engineering Challenges Solved</h4>
                <p className="text-slate-400 small lh-base">
                  {project.challenge || "Designed structured state architectures to prevent unneeded component re-renders, resulting in sub-10ms page update intervals. Clean REST endpoints guarantee transaction atomic compliance."}
                </p>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="d-flex flex-wrap gap-3 mt-4 pt-3 border-top border-secondary border-opacity-25">
              <a href="https://github.com/tusharbabar" target="_blank" rel="noopener noreferrer" className="btn-custom btn-primary-custom flex-grow-1 flex-md-grow-0 py-2.5">
                <i className="bi bi-github"></i> Source Code
              </a>
              <button onClick={() => alert("Holographic demo is live! In production, this opens the project deployment link.")} className="btn-custom btn-outline-custom flex-grow-1 flex-md-grow-0 py-2.5">
                <i className="bi bi-box-arrow-up-right"></i> Live Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
