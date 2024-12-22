import Image from "next/image";
import "../Styles/Contact.css" ;

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I would love to hear from you! Whether it’s a project, job opportunity, or just a chat, feel free to reach out.
        </p>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
          </div>
          <textarea placeholder="Your Message" rows={5} className="form-textarea"></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/Hammad8288?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
            <Image src="/github-icon.png" alt="GitHub" className="social-image-git" width={70} height={40} />
            <p className="social-text">View<br />GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/hammad-ahmed-7aa73118a/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Image src="/linkedin-icon.png" alt="LinkedIn" className="social-image" width={70} height={40} />
            <p className="social-text">Contact On<br />LinkedIn</p>
          </a>
          <a href="https://www.facebook.com/hammad.ahmed.32" target="_blank" rel="noopener noreferrer" className="social-link">
            <Image src="/fb.jpg" alt="Facebook" className="social-image" width={70} height={40} />
            <p className="social-text">Contact On<br />Facebook</p>
          </a>
          <a href="https://wa.me/923323446979" target="_blank" rel="noopener noreferrer" className="social-link">
            <Image src="/wa.png" alt="WhatsApp" className="social-image" width={70} height={40} />
            <p className="social-text">Contact On<br />WhatsApp</p>
          </a>
        </div>
      </div>
    </section>
  );
}
