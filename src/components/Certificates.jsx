import { useState } from "react";
import CertificateModal from "./CertificateModal";

const certificatesData = [
  {
    id: 1,
    title: "ReactJS",
    issuer: "Infosys Springboard",
    category: "Frontend",
    date: "June 2026",
    issueDate: "June 15, 2026",
    skills: ["React.js", "Hooks", "State Management", "Async JS"],
    modules: [
      "React Component Architecture, Virtual DOM & Lifecycle Methods",
      "Custom React Hooks & Performance Optimization",
      "Asynchronous Data Fetching & API State Synchronization",
      "Modern Front-End Build Tools & Component Testing",
    ],
    pdfUrl: "/ReactJS_Certificate.pdf",
    icon: "bi-patch-check-fill",
    badgeBg: "linear-gradient(135deg,#0284c7,#06b6d4)",
    accentColor: "#0284c7",
    cardGlow: "rgba(2,132,199,.08)",
  },
  {
    id: 2,
    title: "JavaScript",
    issuer: "Infosys Springboard",
    category: "Frontend",
    date: "April 2026",
    issueDate: "April 20, 2026",
    skills: ["JavaScript", "ES6+", "Promises", "DOM Manipulation"],
    modules: [
      "Modern ES6+ Syntax, Closures & Event Loop Mechanics",
      "Asynchronous Programming (Promises, Async/Await)",
      "Dynamic DOM Manipulation & Web API Integration",
      "Object-Oriented & Functional Javascript Patterns",
    ],
    pdfUrl: "/1e577ebe-f9cc-4f62-ac06-91706c630f87.pdf",
    icon: "bi-code-slash",
    badgeBg: "linear-gradient(135deg,#d97706,#f59e0b)",
    accentColor: "#d97706",
    cardGlow: "rgba(217,119,6,.08)",
  },
  {
    id: 3,
    title: "Java Full Stack Development",
    issuer: "Giri's Tech Hub, Pune",
    category: "Full Stack",
    date: "2026",
    completionDate: "May 2026",
    skills: ["Java", "Spring Boot", "REST APIs", "MySQL", "React.js"],
    modules: [
      "Core & Advanced Java Frameworks",
      "RESTful Microservices Architecture",
      "React.js Integration",
      "MySQL Database Design",
    ],
    pdfUrl: "/Java_FullStack_Certificate.pdf",
    icon: "bi-award-fill",
    badgeBg: "linear-gradient(135deg,#059669,#10b981)",
    accentColor: "#059669",
    cardGlow: "rgba(5,150,105,.08)",
  },
  {
    id: 4,
    title: "Web Designing",
    issuer: "Avni Infotech",
    category: "UI/UX",
    date: "2026",
    completionDate: "March 2026",
    skills: ["HTML5", "CSS3", "Responsive Design", "Bootstrap"],
    modules: [
      "Semantic HTML5",
      "CSS Grid & Flexbox",
      "Bootstrap Framework",
      "Web Accessibility",
    ],
    pdfUrl: "/Web_Designing_Certificate.pdf",
    icon: "bi-palette-fill",
    badgeBg: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
    accentColor: "#7c3aed",
    cardGlow: "rgba(124,58,237,.08)",
  },
];

const categories = ["All", "Full Stack", "Frontend", "UI/UX"];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesCategory =
      activeCategory === "All" || cert.category === activeCategory;

    const query = searchTerm.toLowerCase().trim();
    if (!query) return matchesCategory;

    return (
      matchesCategory &&
      (cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        cert.skills.some((s) => s.toLowerCase().includes(query)) ||
        cert.modules.some((m) => m.toLowerCase().includes(query)))
    );
  });

  return (
    <section
      id="certificates"
      className="section-padding position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg,#ffffff 0%,#f4fbf8 48%,#f7faff 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <span
            className="d-inline-block mb-3 px-4 py-2 rounded-pill fw-semibold"
            style={{
              background: "rgba(14,98,81,.15)",
              color: "#0e6251",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              border: "1px solid rgba(14,98,81,.15)",
            }}
          >
            <i className="bi bi-patch-check-fill me-2"></i>
            VERIFIED CREDENTIALS
          </span>
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#152c28",
              letterSpacing: "-0.02em",
            }}
          >
            Certificates & Credentials
          </h2>
          <p style={{ color: "#5e736f", maxWidth: 560, margin: "0 auto", fontSize: "1.05rem" }}>
            Industry-recognized certifications and completed software
            engineering programs.
          </p>
        </div>

        {/* Toolbar */}
        <div
          className="rounded-4 p-4 mb-5"
          style={{
            background: "rgba(255,255,255,.82)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(14,98,81,.1)",
            boxShadow: "0 20px 60px rgba(14,98,81,.08)",
          }}
        >
          <div className="d-flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn"
                style={{
                  borderRadius: "999px",
                  padding: "10px 22px",
                  border:
                    activeCategory === cat
                      ? "none"
                      : "1px solid rgba(14,98,81,.14)",
                    background:
                      activeCategory === cat
                        ? "linear-gradient(135deg,#059669,#0ea5e9)"
                        : "rgba(14,98,81,.04)",
                    color: activeCategory === cat ? "#fff" : "#31534c",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: ".3s ease",
                  boxShadow:
                    activeCategory === cat
                      ? "0 4px 20px rgba(5,150,105,.35)"
                      : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="position-relative">
            <div
              className="d-flex align-items-center"
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                border: searchFocused
                  ? "2px solid rgba(52,211,153,.5)"
                  : "1.5px solid rgba(14,98,81,.14)",
                boxShadow: searchFocused
                  ? "0 0 0 6px rgba(52,211,153,.1)"
                  : "0 4px 20px rgba(14,98,81,.08)",
                overflow: "hidden",
                transition: ".25s",
              }}
            >
              <div className="px-3">
                <i
                  className="bi bi-search fs-5"
                  style={{ color: "#34d399" }}
                />
              </div>

              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search certificates, skills, issuer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                style={{
                  padding: "16px 8px",
                  background: "transparent",
                  color: "#152c28",
                  fontSize: "0.95rem",
                }}
              />

              {searchTerm && (
                <button
                  className="btn border-0 me-2"
                  onClick={() => setSearchTerm("")}
                >
                  <i className="bi bi-x-circle-fill fs-5" style={{ color: "#64748b" }} />
                </button>
              )}
            </div>

            <div className="d-flex justify-content-between mt-2 px-1">
              <small style={{ color: "#64748b" }}>
                Search by title, issuer, skill or module
              </small>

              {searchTerm && (
                <small style={{ color: "#34d399", fontWeight: 600 }}>
                  {filteredCertificates.length} result
                  {filteredCertificates.length !== 1 ? "s" : ""}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* Cards */}
        {filteredCertificates.length === 0 ? (
          <div
            className="text-center py-5 rounded-4"
            style={{
              background: "rgba(255,255,255,.82)",
              border: "1px solid rgba(14,98,81,.1)",
              boxShadow: "0 20px 60px rgba(14,98,81,.06)",
            }}
          >
            <i className="bi bi-search-heart fs-1 d-block mb-3" style={{ color: "#64748b" }} />
            <h4 style={{ color: "#152c28" }}>No certificates found</h4>
            <p className="mb-3" style={{ color: "#64748b" }}>Try a different search term or reset filters.</p>
            <button
              className="btn rounded-pill mt-2 px-4 py-2"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              style={{
                background: "rgba(52,211,153,.15)",
                color: "#34d399",
                border: "1px solid rgba(52,211,153,.25)",
                fontWeight: 600,
              }}
            >
              <i className="bi bi-arrow-counterclockwise me-2"></i>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filteredCertificates.map((cert) => (
              <div key={cert.id} className="col-12 col-md-6">
                <div
                  className="h-100 p-4 rounded-4 certificate-card position-relative overflow-hidden d-flex flex-column"
                  style={{
                    background: `linear-gradient(145deg, #ffffff, ${cert.cardGlow.replace(".08", ".14")})`,
                    border: `1px solid ${cert.accentColor}25`,
                    borderLeftWidth: "4px",
                    borderLeftColor: cert.accentColor,
                    boxShadow: `0 16px 38px ${cert.accentColor}18`,
                    minHeight: "285px",
                    transition: ".3s ease",
                  }}
                >
                  {/* Subtle accent glow in corner */}
                  <div
                    className="position-absolute"
                    style={{
                      width: 200,
                      height: 200,
                      top: -60,
                      right: -60,
                      background: `radial-gradient(circle, ${cert.accentColor}15 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div className="d-flex justify-content-between align-items-start mb-3 position-relative">
                    <div className="d-flex gap-3">
                      <div
                        className="rounded-3 text-white d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: 52,
                          height: 52,
                          background: cert.badgeBg,
                          fontSize: "1.4rem",
                          boxShadow: `0 8px 24px ${cert.accentColor}40`,
                        }}
                      >
                        <i className={`bi ${cert.icon}`} />
                      </div>

                      <div>
                        <span
                          className="badge rounded-pill px-3 py-2 fw-semibold"
                          style={{
                            background: `${cert.accentColor}20`,
                            color: cert.accentColor,
                            border: `1px solid ${cert.accentColor}30`,
                            fontSize: "0.8rem",
                          }}
                        >
                          {cert.issuer}
                        </span>

                        <div className="mt-1" style={{ fontSize: "0.82rem", color: "#64748b" }}>
                          <i className="bi bi-calendar3 me-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    <span
                      className="badge rounded-pill px-3 py-1"
                      style={{
                        background: "#f1f5f9",
                        color: "#52636f",
                        border: "1px solid #e2e8f0",
                        fontSize: "0.78rem",
                      }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  <h3
                    className="fw-bold mb-3 position-relative"
                    style={{ color: "#152c28", fontSize: "1.35rem", lineHeight: 1.25 }}
                  >
                    {cert.title}
                  </h3>

                  <div className="d-flex flex-wrap gap-2 mb-4 position-relative">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1"
                        style={{
                          background: `${cert.accentColor}12`,
                          color: "#31534c",
                          fontSize: "0.82rem",
                          border: `1px solid ${cert.accentColor}22`,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: cert.accentColor,
                            display: "inline-block",
                          }}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex flex-column flex-sm-row gap-2 pt-3 position-relative mt-auto" style={{ borderTop: "1px solid rgba(14,98,81,.1)" }}>
                    <button
                      className="btn rounded-pill flex-fill py-2"
                      onClick={() => setSelectedCert(cert)}
                      style={{
                        background: `${cert.accentColor}10`,
                        color: "#31534c",
                        border: `1px solid ${cert.accentColor}28`,
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        transition: ".25s",
                      }}
                    >
                      <i className="bi bi-eye-fill me-2" style={{ color: cert.accentColor }} />
                      Inspect
                    </button>

                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn rounded-pill flex-fill text-white text-decoration-none py-2 text-center"
                      style={{
                        background: cert.badgeBg,
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        boxShadow: `0 4px 18px ${cert.accentColor}30`,
                        transition: ".25s",
                      }}
                    >
                      <i className="bi bi-file-earmark-pdf-fill me-2" />
                      Open PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}

export default Certificates;