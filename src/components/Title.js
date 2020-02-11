import React from "react";
import "./title.css";

const Title = ({ text }) => {
  return (
    <div className="title-deco-container container">
      <div className="content content-default">
        <h3>{text}</h3>
      </div>
      <div className="content-dot"></div>
      <div className="main-diamond-outer"></div>
      <div className="main-diamond-inner"></div>
      <div className="mid-diamond-left"></div>
      <div className="mid-diamond-right"></div>
      <div className="small-diamond-left-top"></div>
      <div className="small-diamond-left-bottom"></div>
      <div className="small-diamond-right-top"></div>
      <div className="small-diamond-right-bottom"></div>
    </div>
  );
};

export default Title;
