import { useState } from "react";

function ProjectCard({ title, tech, goal }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="project-card">
            <h3>{title}</h3>

            <button className="project-btn" onClick={() => setOpen(!open)}>
                {open ? "Hide Details" : "Show Details"}
            </button>

            {open && (
                <div className="project-details">
                    <p><strong>Technologies:</strong> {tech}</p>
                    <p><strong>Project Goal:</strong> {goal}</p>
                </div>
            )}
        </div>
    );
}

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-wrapper">
                <h2 className="projects-title">Projects</h2>

                <div className="projects-grid">
                    <ProjectCard
                        title="Product Management System"
                        tech="React, Bootstrap ,CSS5 ,Node.js, Express, MySQL"
                        Live Link="https://quickcartapp.vercel.app/"
                        goal="To manage products with category-wise listing, admin CRUD operations, and secure backend APIs."
                    />

                    <ProjectCard
                        title="Employee Management System"
                        tech="React, Spring Boot, MySQL"
                        goal="To manage employee records including add, update, delete, and view operations, with role-based access, secure backend APIs, and a user-friendly modern interface."
                    />


                    <ProjectCard
                        title="Exam Application"
                        tech="React, Node.js, REST APIs"
                        goal="To allow users to attend exams, submit answers, and view results in real time."
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;
