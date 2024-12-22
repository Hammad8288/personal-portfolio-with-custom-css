import "../Styles/Skills.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section className="skills-section" id="Skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-description">
          Here are some of the technologies I have been working with recently:
        </p>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <p className="skill-text">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
