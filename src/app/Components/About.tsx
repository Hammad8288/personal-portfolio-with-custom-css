import Image from "next/image";
import "../Styles/About.css"; 

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          {/* Profile Image */}
          <div className="about-image-container">
            <Image
              src="/profile.jpg"
              alt="Hammad Ahmed"
              width={700}
              height={200}
              className="about-image"
            />
          </div>

          {/* About Text */}
          <div className="about-text">
            {/* Introduction */}
            <h3 className="about-subtitle">Introduction</h3>
            <p className="about-paragraph">
              Hello! I am <span className="about-highlight">Hammad Ahmed</span>, a
              dedicated Full Stack Developer based in Pakistan. I specialize in
              building high-quality, user-friendly websites that deliver
              excellent performance and responsiveness.
            </p>

            {/* Technical Skills */}
            <h3 className="about-subtitle">Technical Skills</h3>
            <p className="about-paragraph">
              My primary tech stack includes{" "}
              <span className="about-highlight">
                JavaScript, TypeScript, React, Next.js,
              </span>{" "}
              and <span className="about-highlight">Node.js</span>, along with
              experience in styling frameworks like Tailwind CSS. I am
              passionate about writing clean, maintainable code and following
              best practices to ensure scalability and efficiency.
            </p>

            {/* Personal Interests */}
            <h3 className="about-subtitle">Personal Interests</h3>
            <p className="about-paragraph">
              Outside of development, I love exploring new places, reading about
              technology advancements, and working on side projects. I am always
              eager to learn new skills, and I enjoy collaborating with others
              to bring creative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
