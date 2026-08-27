import { useState } from "react";
import TiltCard from "./TiltCard";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, onOpen }) {
  return (
    <div className="card-modern d-flex flex-column h-100 justify-content-between text-center p-4">
      <div>
        <div className="mb-3 d-flex justify-content-center">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle border"
            style={{
              width: "65px",
              height: "65px",
              background: "rgba(14, 98, 81, 0.08)",
              borderColor: "var(--glass-border)"
            }}
          >
            <i className={`bi ${project.iconClass} fs-3`} style={{ color: "var(--accent-primary)" }}></i>
          </div>
        </div>

        <h3 className="card-modern-title mb-2 fs-5">{project.title}</h3>

        <div className="mt-3 text-start">
          <span className="text-secondary small fw-semibold d-block mb-1">Goal:</span>
          <p className="card-modern-body mb-0 line-clamp-3 text-secondary" style={{ fontSize: "0.88rem" }}>
            {project.goal}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-auto d-flex flex-column gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary-custom rounded-pill btn-sm w-100 py-2.5 d-flex align-items-center justify-content-center gap-2 text-white text-decoration-none"
          style={{ fontWeight: "600", fontSize: "0.88rem" }}
        >
          <i className="bi bi-github fs-6"></i>
          <span>View GitHub Repo</span>
        </a>
        <button
          type="button"
          className="btn btn-outline-custom rounded-pill btn-sm w-100 py-2.5 d-flex align-items-center justify-content-center gap-2"
          onClick={() => onOpen(project)}
          style={{ fontWeight: "600", fontSize: "0.88rem" }}
        >
          <i className="bi bi-box-arrow-up-right"></i>
          <span>Show Details</span>
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Krushi Seva Kendra – Billing & Inventory Management System",
      tech: "Java, Spring Boot, React.js, MySQL, REST APIs, Bootstrap",
      techList: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "Bootstrap 5"],
      goal: "A complete billing and inventory management system designed for agricultural stores to manage stock, sales, customer invoices, and billing history.",
      features: [
        "Automated PDF bill & invoice generation for customer transactions.",
        "Real-time inventory tracking with automated low-stock warnings.",
        "Customer purchasing history and ledger tracking module.",
        "Comprehensive sales analytics reporting dashboard."
      ],
      challenge: "Implemented transactional database safety with MySQL and Spring Boot JPA to handle batch inventory updates and instant PDF generation without blocking API responses.",
      iconClass: "bi-receipt-cutoff",
      colorClass: "success",
      githubUrl: "https://github.com/tusharbabar/Billing-System-Application",
      image: "/project_krushi.png"
    },
    {
      title: "Hotel Booking System",
      iconClass: "bi-building",
      tech: "React.js, Node.js, Express.js, MySQL, REST APIs",
      techList: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
      goal: "Built an end-to-end Hotel Booking System that allows users to search hotels, check room availability, and make online reservations seamlessly.",
      features: [
        "User registration and JWT-authenticated session management.",
        "Hotel and room availability management.",
        "Online room booking & instant reservation confirmation.",
        "Booking history tracking and status dashboard.",
        "Fully responsive design optimized for mobile and desktop."
      ],
      challenge: "Designed lock-safe booking workflows to prevent concurrent double-booking of rooms during high user traffic periods.",
      githubUrl: "https://github.com/tusharbabar/Hotel-Booking-System",
      image: "/projects/hotel-booking.png"
    },
    {
      title: "Product Management System",
      tech: "React, Bootstrap, HTML5, CSS3, Node.js, Express, MySQL",
      techList: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap 5", "REST APIs"],
      goal: "An enterprise product catalog system with category-wise item filtering, admin CRUD management, and fast backend APIs.",
      features: [
        "Real-time administrative product dashboard with advanced search filter.",
        "Secure admin login & full CRUD operations for product inventory.",
        "Optimized MySQL database query execution.",
        "Clean responsive visual layout with instant user feedback alerts."
      ],
      challenge: "Configured MySQL connection pooling and Express middlewares to deliver query response times under 15ms.",
      iconClass: "bi-box-seam",
      colorClass: "info",
      githubUrl: "https://github.com/tusharbabar/product-Managment-system",
      image: "/project_product.png"
    }
  ];

  return (
    <section className="section-padding bg-light-1" id="projects">
      <div className="container">
        <h2 className="heading-secondary fade-up">Developed Projects</h2>
        <p className="subtitle fade-up delay-100">
          A showcase of the major full-stack software applications I have designed and deployed.
        </p>

        <div className="row g-4 mt-2">
          {projectsData.map((project, index) => (
            <div key={index} className={`col-md-6 col-lg-4 fade-up delay-${(index + 1) * 100}`}>
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Showcase Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;
