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

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p><strong>Email:</strong> babartushar2004@gmail.com</p>
            <p><strong>Location:</strong> Pune, India</p>
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


