import "../Styles/Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Text */}
        <div className="footer-text">
          <p>
            Copyright © 2024 <br />
            Built with ❤️ by Hammad Ahmed.
          </p>
        </div>
        {/* Back to Top */}
        <a href="#" className="back-to-top">
          Back To <br /> Top
        </a>
      </div>
    </footer>
  );
}
