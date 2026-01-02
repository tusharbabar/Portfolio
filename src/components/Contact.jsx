function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project, opportunity, or question?  
            Feel free to reach out 👋
          </p>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:babartushar2004@gmail.com">
                babartushar2004@gmail.com
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/tusharbabar"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/tusharbabar
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/tushar-babar-69643a292"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/tushar-babar
              </a>
            </p>

            <p>
              <strong>Location:</strong> Pune, India
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tushar Babar</p>
        <p>Full Stack Developer | React | Node | Java</p>
      </footer>
    </>
  );
}

export default Contact;
