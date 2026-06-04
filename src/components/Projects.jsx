import { useState } from "react";
import TiltCard from "./TiltCard";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, onOpen }) {
  return (
    <TiltCard className="h-100 border-0 bg-transparent p-0 shadow-none">
      <div className="d-flex flex-column h-100 justify-content-between text-center">
        <div>
          <div className="mb-4 d-flex justify-content-center">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle border"
              style={{
                width: "70px",
                height: "70px",
                background: "rgba(255,255,255,0.03)",
                borderColor: `var(--accent-${project.colorClass === 'info' ? 'tertiary' : project.colorClass === 'success' ? 'tertiary' : 'primary'})`
              }}
            >
              <i className={`bi ${project.iconClass} fs-3 text-${project.colorClass}`}></i>
            </div>
          </div>

          <h3 className="card-modern-title text-white">{project.title}</h3>

          <div className="mt-3 text-start">
            <span className="text-secondary small d-block mb-1">Goal:</span>
            <p className="card-modern-body mb-0 text-slate-300 line-clamp-2" style={{ fontSize: "0.9rem" }}>
              {project.goal}
            </p>
          </div>
        </div>

        <div className="pt-4">
          <button
            className="btn btn-outline-custom rounded-pill btn-sm w-100"
            onClick={() => onOpen(project)}
          >
            <i className="bi bi-box-arrow-up-right me-2"></i>
            Show Details
          </button>
        </div>
      </div>
    </TiltCard>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Product Management System",
      tech: "React, Bootstrap, HTML5, CSS3, Node.js, Express, MySQL",
      techList: ["React.js", "Express.js", "MySQL", "Bootstrap 5", "Node.js", "REST APIs"],
      goal: "To manage products with category-wise listing, admin CRUD operations, and secure backend APIs.",
      features: [
        "Real-time product dashboard with advanced categorization filters.",
        "Secure administrator login and complete CRUD editing modules.",
        "Optimized MySQL search indexes that deliver query results under 15ms.",
        "State persistence across page reloads and visual confirmation triggers."
      ],
      challenge: "Configured MySQL database pools and Express middlewares to prevent query leaks, scaling support up to 50 concurrent transactions per second.",
      iconClass: "bi-box-seam",
      colorClass: "info",
      image: "/project_product.png"
    },


    {
      title: "Hotel Booking System",
      image: "/projects/hotel-booking.png",
      iconClass: "bi-building",
      tech: "React.js, Node.js, Express.js, MySQL",
      techList: ["React.js", "Node.js", "Express.js", "MySQL"],

      goal:
        "Built a Hotel Booking System that allows users to search hotels, check room availability, and make reservations online.",

      features: [
        "User registration and login authentication.",
        "Hotel and room listing management.",
        "Room availability checking.",
        "Online booking and reservation management.",
        "Booking history and status tracking.",
        "Responsive design for desktop and mobile."
      ],

      challenge:
        "Designed booking workflows to prevent duplicate reservations and ensured real-time room availability updates."
    },
    
    {
      title: "Exam Application",
      tech: "React, Node.js, REST APIs",
      techList: ["React.js", "Node.js", "REST APIs", "CSS Grid", "State Hooks"],
      goal: "To allow users to attend exams, submit answers, and view results in real time with an intuitive UI.",
      features: [
        "Real-time timer with automated exam auto-submit functionalities.",
        "Dynamic exam dashboard with visual question progress indicators.",
        "Clean REST API endpoints for submitting user answer scripts.",
        "Instantly generated analytics dashboards showing results distribution."
      ],
      challenge: "Built a reliable countdown sync mechanism in React state to ensure quiz timing is immune to client tab suspensions.",
      iconClass: "bi-card-checklist",
      colorClass: "warning",
      image: "/project_exam.png"
    }
  ];

  return (
    <section className="section-padding bg-light-1" id="projects">
      <div className="container">
        <h2 className="heading-secondary fade-up">Developed Projects</h2>
        <p className="subtitle fade-up delay-100">
          A showcase of the major applications I have built and the technologies involved.
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
