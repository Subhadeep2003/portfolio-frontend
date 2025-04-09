import React from "react";
// import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import "./home.css";
import Avaitar from "../../assets/images/avaitar.png";
import Resume from "../../assets/docs/My best Resume.pdf";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { FaSun } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  // const [theme, setTheme] = useTheme();
  //Handle Theme

  // const handleTheme = () => {
  //   setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  // };

  return (
    <div className="home-container" id="home">

      {/* <div className="theme-btn" onClick={handleTheme}>
        {theme === "dark" ? (
          <FaSun size={30} />
        ) : (
          <BsMoonStarsFill size={30} />
        )}
      </div> */}
      
      <div className="home-content">
        <div className="avatar-container">
          <img src={Avaitar} alt="Subhadeep Mukherjee" className="avatar-img" />
        </div>
        <Fade direction="right" delay={200}>
          <h2 className="home-title">
            Hi, I'm <span className="highlight">Subhadeep Mukherjee</span>
          </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer!",
                  "MERN Stack Developer!",
                  "React Native Developer!",
                  "Java Enthusiast",
                  "AIML Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
              }}
            />
          </h1>
        </Fade>
        <p className="home-description">
          Passionate about building <strong> modern web applications </strong>
          with cutting-edge technology and seamless user experiences.
          <strong>Skilled in frontend, backend, and Data science.</strong>
        </p>
        <Fade direction="up">
          <div className="home-buttons">
            <button
              className="btn btn-hire"
              onClick={() => (window.location.href = "#contact")}
            >
              Hire Me
            </button>
            <a className="btn btn-cv" href={Resume} download="Resume.pdf">
              Download Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
