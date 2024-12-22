import Image from "next/image";
import Link from "next/link";
import "../Styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Text Section */}
      <div className="hero-text-section">
        <h1 className="hero-heading">
          Hello! I am <span className="highlight">Hammad Ahmed</span>, a
          Software developer based in Pakistan.
        </h1>
        <p className="hero-paragraph">
          I love building products that are user-friendly, simple, and
          delightful.
        </p>
        <p className="hero-description">
          Welcome to my portfolio!👋 I am Hammad Ahmed, a 24 year old passionate
          Full Stack Developer with expertise in modern web technologies like
          TypeScript, Node.js, Next.js, Tailwind CSS, and React.js With a deep
          understanding of both front-end and back-end development, I am always
          open to connecting with like-minded professionals, whether it’s to
          discuss potential collaborations, share insights, or explore new
          opportunities. Let’s contact and build something amazing together!
        </p>
        <div className="hero-links">
          <Link
            href="https://github.com/Hammad8288?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image
              src="/github-icon.png"
              alt="GitHub"
              width={80}
              height={40}
              className="social-icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hammad-ahmed-7aa73118a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image
              src="/linkedin-icon.png"
              alt="LinkedIn"
              width={50}
              height={40}
              className="social-icon"
            />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-image-section">
        <Image
          src="/profile.jpg"
          width={350}
          height={350}
          alt="Hammad Ahmed"
          className="profile-image"
        />
      </div>
    </div>
  );
}
