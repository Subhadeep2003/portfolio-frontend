import React from "react";
import "./menu.css";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";//Scroll effect
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcReddit } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { GiJourney } from "react-icons/gi";
import { MdInterests } from "react-icons/md";

const menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="sidebarpic.png" alt="profile pic"></img>
            </div>
          </Zoom>
          <Fade direction="left">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReddit />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcStatistics />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="workexperience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessman />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="learningjourney"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GiJourney />
                    Learning Journey
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="interesthobbies"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdInterests />
                    Interest & Hobbies
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcGraduationCap />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReddit />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcStatistics />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessman />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="learningjourney"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <GiJourney />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="interesthobbies"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <MdInterests />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default menus;
