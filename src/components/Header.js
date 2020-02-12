import React from "react";
import { Link } from "@reach/router";
import "./diamond.css";

const Header = () => {
  return (
    <Link to="/" className="reactlink">
      <div className="header">
        <h1>Nick Barnard</h1>
        <div className="triple-diamond-deco-container container">
          <div className="left-line"></div>
          <div className="right-line"></div>
          <div className="small-diamond-left"></div>
          <div className="small-diamond-right"></div>
          <div className="large-diamond"></div>
        </div>
        <div className="headersubtitle">
          <h4>Full-Stack</h4>
          <h4>Development</h4>
        </div>
      </div>
    </Link>
  );
};

export default Header;
