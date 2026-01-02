function Contact() {
  return (
    <>
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-3">Get In Touch</h2>
              <p className="text-muted mb-4">
                Have a project, opportunity, or question? Feel free to reach out 👋
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Contact Form */}
              <form className="card shadow-sm p-4 mb-4">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-center mb-4">
            <p className="mb-1">
              <strong>Email:</strong> babartushar560@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9529647719
            </p>
          </div>

          {/* Social Buttons */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://github.com/tusharbabar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <i className="bi bi-github me-2"></i> GitHub
            </a>

            <a
              href="https://linkedin.com/in/tushar-babar-69643a292"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              <i className="bi bi-linkedin me-2"></i> LinkedIn
            </a>

            <a
              href="mailto:babartushar2004@gmail.com"
              className="btn btn-outline-danger"
            >
              <i className="bi bi-envelope me-2"></i> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-3 text-center">
        <p className="mb-0">© {new Date().getFullYear()} Tushar Babar</p>
        <small className="text-muted">
          Full Stack Developer | React | Node | Java
        </small>
      </footer>
    </>
  );
}

export default Contact;
