import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div className="navbar">
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
  );
};

export default NavBar;
