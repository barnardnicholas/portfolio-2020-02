import React from "react";
import { Link } from "@reach/router";
import "./squares.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="square-deco-container container">
        <div className="square-deco-content">
          <div className="navbutton">
            <Link to="/" className="reactlink">
              <h2>Home</h2>
            </Link>
          </div>
          <div className="navbutton">
            <Link to="/portfolio" className="reactlink">
              <h2>Portfolio</h2>
            </Link>
          </div>
          <div className="navbutton">
            <Link to="/about" className="reactlink">
              <h2>About</h2>
            </Link>
          </div>
          <div className="navbutton">
            <Link to="/contact" className="reactlink">
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
        <div className="square-deco-inner"></div>
        <div className="square-deco-square-left-top"></div>
        <div className="square-deco-square-left-bottom"></div>
        <div className="square-deco-square-right-top"></div>
        <div className="square-deco-square-right-bottom"></div>
        <div className="square-deco-tall"></div>
        <div className="square-deco-wide"></div>
      </div>
    </div>
  );
};

export default NavBar;
