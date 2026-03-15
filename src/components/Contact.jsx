import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_39uqbjr',
      'template_9m184nq',
      form.current,
      'W6sukGrwL5p8hj-uw'
    )
      .then((result) => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <>
      <section className="section-padding position-relative bg-pattern" id="contact">
        <div className="hero-glow" style={{ top: '30%', left: '80%', opacity: 0.5 }}></div>
        <div className="container position-relative z-index-1">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center fade-up">
              <h2 className="heading-secondary mb-3">Get In Touch</h2>
              <p className="subtitle mb-5">
                Have a project, opportunity, or question? Feel free to reach out. I try my best to reply promptly!
              </p>
            </div>
          </div>

          <div className="row g-5 justify-content-center align-items-center">

            {/* Contact Details & Socials */}
            <div className="col-lg-4 order-2 order-lg-1 fade-up delay-100">
              <div className="card-modern p-4 p-md-5 d-flex flex-column justify-content-center h-100">
                <h3 className="fs-4 mb-4 text-dark">Contact Information</h3>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-envelope text-info fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fs-6 mb-1 text-secondary">Email Me</h5>
                    <a href="mailto:babartushar560@gmail.com" className="text-dark text-decoration-none">babartushar560@gmail.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-telephone text-success fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fs-6 mb-1 text-secondary">Call Me</h5>
                    <a href="tel:+919529647719" className="text-dark text-decoration-none">+91 9529647719</a>
                  </div>
                </div>

                <h3 className="fs-5 mb-3 text-dark">Social Profiles</h3>
                <div className="d-flex gap-3">
                  <a href="https://github.com/tusharbabar" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle p-2" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-github fs-5"></i>
                  </a>
                  <a href="https://linkedin.com/in/tushar-babar-69643a292" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 order-1 order-lg-2 fade-up delay-200">
              <div className="card-modern p-4 p-md-5">
                <h3 className="fs-4 mb-4 text-dark">Send Me a Message</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <label className="form-label text-secondary small">Your Name</label>
                      <input type="text" name="user_name" className="form-control form-control-custom" placeholder="John Doe" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary small">Your Email</label>
                      <input type="email" name="user_email" className="form-control form-control-custom" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-secondary small">Your Message</label>
                    <textarea name="message" className="form-control form-control-custom" rows="4" placeholder="Write your project details or questions..." required></textarea>
                  </div>

                  {status === 'success' && <div className="alert alert-success py-2 border-0">Message sent successfully! I'll quickly get back to you.</div>}
                  {status === 'error' && <div className="alert alert-danger py-2 border-0">Failed to send message. Please try again later.</div>}

                  <button type="submit" className="btn-custom btn-primary-custom w-100" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...</>
                    ) : (
                      <><i className="bi bi-send me-2"></i> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer border-top border-secondary border-opacity-25" style={{ background: 'var(--bg-primary)' }}>
        <div className="container py-4 text-center">
          <p className="mb-1 text-primary opacity-75">
            © {new Date().getFullYear()} Tushar Babar. All Rights Reserved.
          </p>
          <small className="text-secondary">
            Built with React & Vanilla CSS Masterpieces
          </small>
        </div>
      </footer>
    </>
  );
}

export default Contact;
