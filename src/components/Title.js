import React from "react";
import "./title.css";

const Title = ({ text }) => {
  return (
    <div class="title-deco-container container">
      <div class="content content-default">
        <h3>{text}</h3>
      </div>
      <div class="content-dot"></div>
      <div class="main-diamond-outer"></div>
      <div class="main-diamond-inner"></div>
      <div class="mid-diamond-left"></div>
      <div class="mid-diamond-right"></div>
      <div class="small-diamond-left-top"></div>
      <div class="small-diamond-left-bottom"></div>
      <div class="small-diamond-right-top"></div>
      <div class="small-diamond-right-bottom"></div>
    </div>
  );
};

export default Title;
