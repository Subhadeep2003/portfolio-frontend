import React from "react";
import { FaCode, FaLaptopCode, FaCogs, FaDatabase, FaBrain , FaRocket} from "react-icons/fa";
import "./Learning.css";
const Learning = () => {
  const learningData = [
    {
      icon: <FaCode className="icon" />,
      title: "Back-End Development",
      description:
        "Learned Java, Spring Boot for building RESTful APIs. Gained experience with databases and authentication with Hibernate & JPA.",
    },
    {
      icon: <FaLaptopCode className="icon" />,
      title: "Web Development",
      description:
        "Started with HTML, CSS, and JavaScript and dove deep into React.js.",
    },
    {
      icon: <FaCogs className="icon" />,
      title: "Data Structure & Algorithm",
      description:
        "Studied DSA such as arrays, linked lists, stacks, and queues. Applied them to solve various algorithmic challenges and optimize code efficiency.",
    },
    {
      icon: <FaDatabase className="icon" />,
      title: "System Design",
      description:
        "Learned to design scalable and robust systems, focusing on microservices architecture, load balancing, database sharding & system reliability.",
    },
    {
      icon: <FaBrain className="icon" />,
      title: "Python & Machine Learning",
      description:
        "Currently exploring data science and machine learning concepts using Python. Built models for classification and regression.",
    },
  ];
  return (
        <section className="learning-journey" id="learningjourney">
      <h3 className="title">Learning Journey</h3>
      <div className="journey-container">
        {learningData.map((item, index) => (
          <div key={index} className="journey-card">
            <div className="icon-container">{item.icon}</div>
            <div className="text-container">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="future-goal">
        <h3 className="title">Future Goals</h3>
        <div className="future-goal-container">
          <div className="future-goal-card">
            <div className="future-icon-container"><FaRocket size={40} /></div>
            <div className="future-text-container">
              <p className="future-goal-content">I aim to deepen my knowledge in AI and machine learning, focusing on developing intelligent systems that solve real-world problems. My goal is to contribute to innovative projects that leverage technology for social good.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Learning;
