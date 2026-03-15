import { useState } from "react";

function ProjectCard({ title, tech, goal, iconClass, colorClass }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="card-modern d-flex flex-column h-100">
            <div className="mb-4 text-center">
                <div className={`d-inline-flex align-items-center justify-content-center rounded-circle border border-${colorClass}`} style={{width: "60px", height: "60px", background: "rgba(255,255,255,0.05)"}}>
                    <i className={`${iconClass} fs-3 text-${colorClass}`}></i>
                </div>
            </div>

            <h3 className="card-modern-title text-center">{title}</h3>

            <div className="mt-auto pt-4 text-center">
                <button 
                    className="btn btn-outline-custom rounded-pill btn-sm w-100" 
                    onClick={() => setOpen(!open)}
                >
                    <i className={`bi bi-chevron-${open ? 'up' : 'down'} me-2`}></i>
                    {open ? "Hide Details" : "Show Details"}
                </button>
            </div>

            {open && (
                <div className="mt-4 p-3 rounded-3 glass-effect border-0 fade-up" style={{ fontSize: "0.9rem" }}>
                    <p className="mb-2 text-dark">
                        <i className="bi bi-braces text-info me-2"></i><strong>Technologies:</strong><br/>
                        <span className="text-secondary ms-4 lh-base d-block mt-1">{tech}</span>
                    </p>
                    <hr className="border-secondary opacity-25 my-2" />
                    <p className="mb-0 text-dark">
                        <i className="bi bi-bullseye text-danger me-2"></i><strong>Project Goal:</strong><br/>
                        <span className="text-secondary ms-4 lh-base d-block mt-1">{goal}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

function Projects() {
    return (
        <section className="section-padding bg-light-1" id="projects">
            <div className="container">
                <h2 className="heading-secondary fade-up">Developed Projects</h2>
                <p className="subtitle fade-up delay-100">
                    A showcase of the major applications I have built and the technologies involved.
                </p>

                <div className="row g-4 mt-5">
                    
                    <div className="col-md-6 col-lg-4 fade-up delay-100">
                        <ProjectCard
                            title="Product Management System"
                            tech="React, Bootstrap, HTML5, CSS3, Node.js, Express, MySQL"
                            goal="To manage products with category-wise listing, admin CRUD operations, and secure backend APIs."
                            iconClass="bi-box-seam"
                            colorClass="info"
                        />
                    </div>

                    <div className="col-md-6 col-lg-4 fade-up delay-200">
                        <ProjectCard
                            title="Employee Management System"
                            tech="React, Spring Boot, MySQL"
                            goal="To manage employee records including add, update, delete, and view operations, with role-based access, secure backend APIs, and a user-friendly modern interface."
                            iconClass="bi-people"
                            colorClass="success"
                        />
                    </div>

                    <div className="col-md-6 col-lg-4 fade-up delay-300">
                        <ProjectCard
                            title="Exam Application"
                            tech="React, Node.js, REST APIs"
                            goal="To allow users to attend exams, submit answers, and view results in real time with an intuitive UI."
                            iconClass="bi-card-checklist"
                            colorClass="warning"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Projects;
