import React from "react";
import "./Interest.css";
import {
  FaCar,
  FaPlane,
  FaBasketballBall,
  FaTv,
  FaUtensils,
} from "react-icons/fa";

const hobbies = [
  {
    icon: <FaCar />,
    title: "Driving",
    description: "Enjoys long drives and exploring new places by road.",
  },
  {
    icon: <FaPlane />,
    title: "Travel",
    description: "Loves discovering new cultures and destinations.",
  },
  {
    icon: <FaBasketballBall />,
    title: "Sports",
    description: "Enjoys playing and watching various sports.",
  },
  {
    icon: <FaTv />,
    title: "Movies",
    description: "Enthusiast of thrillers, sci-fi, and classic films.",
  },
  {
    icon: <FaUtensils />,
    title: "Cooking",
    description: "Passionate about trying new recipes and flavors.",
  },
];

const Interest = () => {
  return (
    <div className="hobbies-container" id="interesthobbies">
      <div className="hobbies-card">
        <h2 className="hobbies-title">Interests & Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobbies-item">
              <div className="hobbies-icon">{hobby.icon}</div>
              <h3 className="hobbies-item-title">{hobby.title}</h3>
              <p className="hobbies-item-description">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;
