import React from "react";
import vector from './images/laptop-phone.png'
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="content-logo">Rarepz</div>
      <div className="content-vector">
        <img src={vector} alt="vector of the header"/>
      </div>
      <div className="content-description">
        <h1>
          <span>rafael alexander reyes perez</span>
          Front-end Developer
        </h1>
      </div>
    </div>
  );
};

export default Header;
