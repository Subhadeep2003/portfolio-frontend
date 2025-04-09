import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const projects = [
  {
    title: "WonderList Hotel Booking Website",
    image:
      "https://qrologic.com/images/Hotel-Bookings.jpg",
    tags: ["Node", "Express", "React", "MongoDB"],
    category: "Full Stack",
    link: "https://github.com/Subhadeep2003/Wanderlist-WebDev-Project",
  },
  {
    title: "Stock Trading Platform",
    image:
      "https://www.interactivebrokers.co.in/images/web/stocks-platform-comp-xl-xl.png?v=1635251879",
    tags: ["React", "Next.js", "Firebase", "Tailwind"],
    category: "Finance",
    link: "https://github.com/Subhadeep2003/IIS-Deployment-CI-CD",
  },
  {
    title: "Chatbot with OpenAI",
    image:
      "https://media.bitcot.com/wp-content/uploads/2024/01/ai-chatbot-platform.png",
    tags: ["Python", "OpenAI", "Flask", "NLTK"],
    category: "AI & ML",
    link: "https://github.com/Subhadeep2003/ECommerceApp",
  },
];

const Projects = () => {
  return (
    <div className="container project mt-5" id="projects">
      <div className="heading">
      <h2 className="col-12 mt-3 mb-1 text-center heading">Top Recent Projects</h2>
      <hr />
      </div>
      <p className="pb-3 text-center">
        With hands-on experience in full-stack development, DevOps, and AI
        integration, I have built a hotel booking website, implemented DevOps
        pipelines, developed a face recognition project, created chatbots, built
        a stock trading platform, and integrated ChatGPT with OpenAI. My
        projects showcase expertise in web development, automation, and
        AI-driven applications.
      </p>
      {/* Card Design */}
      <div className="row gy-4">
        {projects.map((project, index) => (
                <Spin>
            <div key={index} className="col-md-4">
              <div className="card project-card">
                <span className="card-category">{project.category}</span>
                <img
                  className="card-img-top"
                  src={project.image}
                  alt={project.title}
                />
                <div className="card-body text-center">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge tag-badge me-1">
                      {tag}
                    </span>
                  ))}
                  <h5 className="card-title mt-3">{project.title}</h5>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            </Spin>
        ))}
      </div>
    </div>
  );
};

export default Projects;

//If I want to target a particular card and cahnge in css then

/* Target "Stock Trading Platform" specifically */

// .project-card:nth-child(2) {
//   width: 350px !important; /* Change the size */
//   height: 500px !important;
//   background-color: #ffeecc !important; /* Change background */
