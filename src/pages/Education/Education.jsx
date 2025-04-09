import React from 'react';
import { IoMdSchool } from "react-icons/io";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education"id='education'>
        <h2 className="col-12 mt-3 mb-1 text-center">Education Details</h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f8f9fa', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            contentArrowStyle={{ borderRight: '7px solid #00a86b' }}
            date="2021 - Present"
            iconStyle={{ background: '#00a86b', color: '#fff' }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.TECH in CSE(AIML)</h3>
            <h4 className="vertical-timeline-element-subtitle">Dr. B.C. Roy Engineering College</h4>
            <p className="marks">Current CGPA: <span>8.5</span></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f8f9fa', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            contentArrowStyle={{ borderRight: '7px solid #00a86b' }}
            date="2021"
            iconStyle={{ background: '#00a86b', color: '#fff' }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Class XII</h3>
            <h4 className="vertical-timeline-element-subtitle">Kanksa Boys High School</h4>
            <p className="marks">Percentage: <span>62%</span></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f8f9fa', color: 'black', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            contentArrowStyle={{ borderRight: '7px solid #00a86b' }}
            date="2019"
            iconStyle={{ background: '#00a86b', color: '#fff' }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Class X</h3>
            <h4 className="vertical-timeline-element-subtitle">Ramkrishna Ashrama Vidyapith</h4>
            <p className="marks">Percentage: <span>85%</span></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education;
