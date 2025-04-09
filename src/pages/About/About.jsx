import React from "react";
import "./about.css";
import { Bounce } from "react-awesome-reveal";
const About = () => {
  return (
    <Bounce>
      <div className="about" id="about">
        <div className="about-container">
          <div className="about-img">
            <img src="profileimg.jpg" alt="Profile" />
          </div>
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              Hi, I’m <span className="highlight">Subhadeep Mukherjee</span>, a
              passionate and driven <b>B.Tech Computer Science & Engineering</b>{" "}
              student with a strong foundation in{" "}
              <b>software development, DevOps, and machine learning.</b>
              <br />
              <br />I love solving complex problems and building{" "}
              <span className="highlight">innovative solutions</span> that
              create an impact. My expertise includes{" "}
              <b>Java, Python, C, MERN Stack, and Cloud Technologies.</b>
              <br />
              <br />
              Besides coding, I enjoy <span className="highlight">
                gaming
              </span>{" "}
              and <span className="highlight">stock market investing</span>,
              where I analyze trends and strategies to make informed decisions.
              <br />
              <br />I believe in <b>continuous learning</b> and pushing my
              skills beyond limits. Let's connect and build something amazing
              together! 🚀
            </p>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default About;
