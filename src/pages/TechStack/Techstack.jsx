import React from "react";
import "./techstack.css";
import { AttentionSeeker } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { techstackList } from "../../utils/techstacklist";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <AttentionSeeker effect="rubberBand">
          <h2 className="col-12 mt-3 mb-1 text-center">Technologies Stack</h2>
          <hr />
          <p className="pb-3 text-center ">
            👉 including programming laguages,framework,databases,front-end and
            back-end tools, and APIs
          </p>
        </AttentionSeeker>
        <Fade direction="left">
        <div className="row">
          {techstackList.map((tech) => (
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                      </div>
                      <h5 className="text-center">{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
                      </Fade>
      </div>

    </>
  );
};

export default Techstack;
