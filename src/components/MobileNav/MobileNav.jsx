import React, { useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-scroll";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcReddit } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { GiJourney } from "react-icons/gi";
import { MdInterests } from "react-icons/md";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks

  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuUnfold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">My Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
