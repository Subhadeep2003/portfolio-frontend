import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import Menus from "../Menus/menus";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";
const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={changeToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
            <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
