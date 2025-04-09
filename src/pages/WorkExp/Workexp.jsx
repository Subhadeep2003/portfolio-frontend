import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VscAzureDevops } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import "./Workexp.css";

const Workexp = () => {
  return (
    <>
      <div className="work" id="workexperience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience</h2>
          <hr />
          <VerticalTimeline lineColor="#ffffff">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8f9fa",
                color: "black",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #00a86b" }}
              date="April - July 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<VscAzureDevops />}
            >
              <h3 className="vertical-timeline-element-title">
                DevOps Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Celebal Technologies
              </h4>
              <p>
                - Implemented CI/CD pipelines to automate deployment processes.
                <br />
                - Worked on cloud infrastructure using Azure DevOps and
                Kubernetes.
                <br />
                - Managed containerized applications using Docker and Helm
                charts.
                <br />
                - Automated system configurations and deployments with Ansible.
                <br />- Collaborated with development teams to ensure seamless
                integrations.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8f9fa",
                color: "black",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #00a86b" }}
              date="Sept - March 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Adzi Digital
              </h4>
              <p>
                - Developed a modern, responsive web application using React and
                Redux.
                <br />
                - Created RESTful APIs using Node.js and Express.js.
                <br />
                - Designed and optimized MongoDB database schemas.
                <br />
                - Integrated authentication using JWT for secure user access.
                <br />- Enhanced performance through caching and server-side
                optimizations.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8f9fa",
                color: "black",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #00a86b" }}
              date="April - July 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<GiArtificialIntelligence/>}
            >
              <h3 className="vertical-timeline-element-title">
                Machine Learning Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Codespeedy Technologies
              </h4>
              <p>
                - Built and trained ML models using TensorFlow and Keras.
                <br />
                - Worked on data preprocessing and feature engineering using
                Pandas.
                <br />
                - Developed classification and regression models for business
                analytics.
                <br />
                - Implemented NLP-based text classification models using
                Scikit-learn.
                <br />- Optimized ML models for better accuracy and performance.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Workexp;
