function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(10, 15, 29, 0.88)", backdropFilter: "blur(14px)", zIndex: 1055 }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-content text-white border-0 shadow-lg overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(14, 165, 233, 0.2)"
          }}
        >
          {/* Top Control Bar */}
          <div className="d-flex justify-content-between align-items-center p-3 px-4 bg-dark bg-opacity-50 border-bottom border-secondary border-opacity-25">
            <div className="d-flex align-items-center gap-2 text-info font-monospace small">
              <i className="bi bi-shield-check text-success fs-5"></i>
              <span>RECRUITER DIRECT CERTIFICATE INSPECTOR</span>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white opacity-75"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Authentic Visual Certificate Card */}
          <div className="p-4 p-md-5">
            <div
              className="certificate-paper p-4 p-md-5 rounded-4 text-center text-slate-900 position-relative shadow-inner"
              style={{
                background: "#ffffff",
                color: "#0f172a",
                border: "12px solid #f1f5f9",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}
            >
              {/* Certificate Watermark / Header Logo */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="text-start">
                  <h4 className="fw-bold text-primary mb-0 font-heading" style={{ letterSpacing: "-0.5px" }}>
                    {certificate.issuer}
                  </h4>
                  <small className="text-muted font-monospace" style={{ fontSize: "0.78rem" }}>
                    {certificate.issuer.includes("Infosys") ? "Navigate your next" : "Authorized Technical Institute"}
                  </small>
                </div>
                <div className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill font-monospace" style={{ fontSize: "0.8rem" }}>
                  <i className="bi bi-patch-check-fill me-1"></i> OFFICIAL CERTIFICATE
                </div>
              </div>

              <div className="my-4">
                <p className="text-muted text-uppercase tracking-widest mb-1" style={{ fontSize: "0.85rem", letterSpacing: "3px" }}>
                  Course Completion Certificate
                </p>
                <p className="text-secondary small mb-3">This certificate is awarded to</p>

                <h2 className="display-6 fw-bold text-dark mb-3 font-heading" style={{ color: "#0284c7" }}>
                  Tushar Babar
                </h2>

                <p className="text-secondary mb-2">for successfully completing the course</p>

                <h3 className="fw-bold text-dark mb-4 py-2 px-4 d-inline-block rounded-3" style={{ background: "rgba(14, 165, 233, 0.08)", color: "#0f172a", border: "1px solid rgba(14, 165, 233, 0.2)" }}>
                  {certificate.title}
                </h3>

                {certificate.completionDate && (
                  <p className="text-muted small mb-0">
                    Completed on: <strong className="text-dark">{certificate.completionDate}</strong>
                  </p>
                )}
                {certificate.issueDate && (
                  <p className="text-muted small mb-0">
                    Issued on: <strong className="text-dark">{certificate.issueDate}</strong>
                  </p>
                )}
              </div>

              {/* Bottom Verification Footer inside Certificate Paper */}
              <div className="row align-items-end mt-4 pt-4 border-top border-2 border-slate-200">
                <div className="col-12 col-md-6 text-start mb-3 mb-md-0">
                  {certificate.verifyUrl ? (
                    <div>
                      <small className="text-muted d-block" style={{ fontSize: "0.75rem" }}>
                        Online Credential Verification:
                      </small>
                      <a
                        href={certificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary fw-semibold text-break"
                        style={{ fontSize: "0.82rem" }}
                      >
                        {certificate.verifyUrl}
                      </a>
                    </div>
                  ) : (
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                      Verified Credential from {certificate.issuer}
                    </small>
                  )}
                </div>
                <div className="col-12 col-md-6 text-end">
                  <span className="font-serif italic text-secondary fw-semibold d-block" style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem" }}>
                    {certificate.issuer}
                  </span>
                  <small className="text-muted" style={{ fontSize: "0.75rem" }}>Authorized Signature & Assessment</small>
                </div>
              </div>
            </div>

            {/* Recruiter Details & Modules Section */}
            <div className="mt-4 p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div className="row g-3">
                <div className="col-12 col-md-7">
                  <h6 className="text-info font-monospace mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-list-check"></i> Key Competencies Mastered
                  </h6>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-1.5" style={{ fontSize: "0.88rem", color: "#cbd5e1" }}>
                    {certificate.modules && certificate.modules.map((mod, idx) => (
                      <li key={idx} className="d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-success flex-shrink-0 mt-1" style={{ fontSize: "0.85rem" }}></i>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 col-md-5">
                  <h6 className="text-warning font-monospace mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-tags-fill"></i> Tech Stack Tags
                  </h6>
                  <div className="d-flex flex-wrap gap-1.5 mb-3">
                    {certificate.skills && certificate.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-badge" style={{ fontSize: "0.78rem" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  {certificate.verifyUrl && (
                    <a
                      href={certificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info w-100 rounded-pill py-2 text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      <span>Verify on Official Portal</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="modal-footer border-top border-secondary border-opacity-25 p-3 px-4 d-flex justify-content-between">
            <span className="text-slate-400 small d-flex align-items-center gap-1">
              <i className="bi bi-person-check text-success"></i> Candidate Name: <strong>Tushar Babar</strong>
            </span>
            <button
              type="button"
              className="btn btn-secondary px-4 py-2 rounded-pill fw-semibold"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
