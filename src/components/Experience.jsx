import TiltCard from "./TiltCard";

function Experience() {
  return (
    <section className="section-padding bg-light-1" id="experience">
      <div className="container">
        <h2 className="heading-secondary fade-up">Education & Experience</h2>

        <p className="subtitle fade-up delay-100">
          My academic journey and professional milestones, showcasing my growth
          in software development and full-stack development.
        </p>

        <div className="timeline mt-5">

          {/* Education */}
          <div className="timeline-item left fade-up delay-200">
            <TiltCard className="border-0 bg-transparent p-0 shadow-none">
              <div className="timeline-content">
                <span className="timeline-date">2022 - 2025</span>

                <h3 className="card-modern-title mb-2 text-white">
                  Bachelor of Computer Science (BCS)
                </h3>

                <p className="card-modern-body mb-0 text-slate-300">
                  Graduated with a strong foundation in Computer Science and
                  Software Development. Gained knowledge of programming
                  concepts, Object-Oriented Programming (OOP), Data Structures,
                  Database Management Systems, Software Engineering, and Web
                  Technologies. Built multiple academic projects and developed
                  problem-solving skills through practical implementation of
                  programming and database concepts.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Software Developer Internship */}
          <div className="timeline-item right fade-up delay-300">
            <TiltCard className="border-0 bg-transparent p-0 shadow-none">
              <div className="timeline-content">
                <h3 className="card-modern-title mb-1 text-white">
                  Software Developer Intern
                </h3>
                <p className="mb-3 text-info fw-semibold">Gsoft Solutions Pvt Ltd, Pune</p>

                <ul className="card-modern-body mb-0 text-slate-300 ps-3">
                  <li>Developed and maintained web applications using React, Node.js, HTML, CSS, and JavaScript.</li>
                  <li>Implemented CRUD operations with Core Java and Node.js, optimized database queries, and tested APIs with Postman.</li>
                  <li>Improved UI responsiveness and overall application performance.</li>
                  <li>Used Git and GitHub for version control, branch management, and collaborative development.</li>
                  <li>Developed Node.js and Express.js backend modules, designed REST APIs, integrated MySQL databases, and optimized SQL queries.</li>
                </ul>
              </div>
            </TiltCard>
          </div>

          {/* Java Full Stack Course */}
          <div className="timeline-item left fade-up delay-400">
            <TiltCard className="border-0 bg-transparent p-0 shadow-none">
              <div className="timeline-content">
                <h3 className="card-modern-title mb-2 text-white">
                  Java Full Stack Development Course
                </h3>

                <p className="card-modern-body mb-0 text-slate-300">
                  Successfully completed a Java Full Stack Development course,
                  gaining hands-on experience in modern frontend and backend
                  technologies. On the frontend, I learned HTML, CSS,
                  JavaScript, Bootstrap, React.js, and responsive web design.
                  On the backend, I worked with Core Java, JDBC, Servlets,
                  Node.js, Express.js, REST APIs, and MySQL.
                </p>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;