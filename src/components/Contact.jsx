import { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    // Here you can later add API / EmailJS logic

    setSuccess(true);

    // Optional: clear form
    e.target.reset();

    // Optional: hide success message after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* Success Message */}
          {success && (
            <p className="success-msg">✅ Message sent successfully!</p>
          )}

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
