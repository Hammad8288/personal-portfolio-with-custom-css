import Image from "next/image";
import "../Styles/Project.css"; 

export default function Projects() {
  const Projects = [
    {
      id: 0,
      title: "Currency Converter",
      desc: "Get a fast and easy calculator for converting one currency to another using the latest live exchange rates",
      Image: "/currency.jpg",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://js-currency-converter-six.vercel.app/",
      githubLink: "https://github.com/Hammad8288/JS-Currency-Converter",
    },
    {
      id: 1,
      title: "Tic-Tac-Toe Game",
      desc: "The game is played on a grid that is 3 squares by 3 squares.",
      Image: "/tic-tac-toe.png",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://tic-tac-toe-game-dun-two.vercel.app/",
      githubLink: "https://github.com/Hammad8288/Tic-Tac-Toe-Game",
    },
    {
      id: 2,
      title: "Weather App",
      desc: "You can get any country live weather update.",
      Image: "/weather.jpg",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://js-weather-app-phi.vercel.app/",
      githubLink: "https://github.com/Hammad8288/JS-weather-app",
    },
    {
      id: 3,
      title: "Analog Clock",
      desc: "A clock is a machine in which a device that performs regular movements in equal intervals of time is linked to a counting mechanism that records the number of movements.",
      Image: "/analog-clock.jpg",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://js-analog-clock-rust.vercel.app/",
      githubLink: "https://github.com/Hammad8288/JS-Analog-Clock",
    },
    {
      id: 4,
      title: "Resume Builder",
      desc: "With this project, you will create a CV that shows you at your Best..",
      Image: "/resume-builder.png",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://hackathons-milestones-5.vercel.app/",
      githubLink:
        "https://github.com/Hammad8288/Hackathons-Milestones/tree/main/Shareable%20Resume",
    },
  ];

  return (
    <section className="projects-section" id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {Projects.map((project) => (
          <div key={project.id} className="project-card">
            <Image
              src={project.Image}
              alt={project.title}
              width={300}
              height={100}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.vercelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-repo"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
