import React from "react";
import shadow from './images/shadow.svg';
import vector from "./images/vector-header.svg";
import "./Header.css";

const Header = () => {
  let email = 'mailto:rafaelalexanderr5@gmail.com'
  let phone = 'tel:8294302840'
  return (
    <div className="Header">
      <div className="content-logo">
        <div className="shadow">
        <img src={shadow} alt="vector of the header" />
          <h2>Rarepz</h2>
        </div>
      </div>
      <div className="content-vector">
        <img src={vector} alt="vector of the header" />
      </div>
      <div className="content-description">
        <h1>
          <span>rafael alexander reyes perez</span>
          Front-end Developer
        </h1>
        <p><a href={phone}>+1 (829) 430-2840</a></p>
        <p><a href={email}>rafaelalexanderr5@gmail.com</a></p>
        <p><a href={email}>rafaelalexanderr5@gmail.com</a></p>
      </div>
      <div className="skew-effect"></div>
    </div>
  );
};

export default Header;
