import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Nick Barnard</h1>
      <div class="triple-diamond-deco-container container">
        <div class="left-line"></div>
        <div class="right-line"></div>
        <div class="small-diamond-left"></div>
        <div class="small-diamond-right"></div>
        <div class="large-diamond"></div>
      </div>
      <div className="headersubtitle">
        <h4>Full-Stack</h4>
        <h4>Development</h4>
      </div>
    </div>
  );
};

export default Header;
