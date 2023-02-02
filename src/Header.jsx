import React from "react";
import "./Header.css";
import img from "./Image/FH-logo.png";

const Header = () => {
  return (
    <>
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="Navbar">
        <nav>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Service">Service</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
