import React from "react";
import Title from "./Title";
import PageTile from "./PageTile";
import "./diamond.css";
import reactjs from "../assets/images/reactjs_600x200.png";
import reachrouter from "../assets/images/reachrouter_600x200.png";

const aboutContent = () => {
  return (
    <>
      <h3>Tech Stack</h3>
      <br />
      <img
        src={reactjs}
        alt="React.js"
        width="180px"
        height="60px"
        style={{ marginRight: "16px" }}
      />
      <img
        src={reachrouter}
        alt="Reach/Router"
        width="180px"
        height="60px"
        style={{ marginLeft: "16px" }}
      />
      <br />
      <br />
      <p>This web app was created using React JS and Reach Router.</p>
      <br />
      <center>
        <div className="triple-diamond-deco-container container">
          <div className="left-line"></div>
          <div className="right-line"></div>
          <div className="small-diamond-left"></div>
          <div className="small-diamond-right"></div>
          <div className="large-diamond"></div>
        </div>
      </center>
      <br />
      <br />
      <h3>Styling</h3>
      <p>
        Art Deco Styling Elements by Daine
        <br />
        <a href="https://codepen.io/veralidaine">
          https://codepen.io/veralidaine
        </a>
        <br />
        <a href="https://codepen.io/veralidaine/pen/ayewQw">
          https://codepen.io/veralidaine/pen/ayewQw
        </a>
      </p>
      <br />
      <br />
      <center>
        <div className="triple-diamond-deco-container container">
          <div className="left-line"></div>
          <div className="right-line"></div>
          <div className="small-diamond-left"></div>
          <div className="small-diamond-right"></div>
          <div className="large-diamond"></div>
        </div>
      </center>
      <br />
      <br />
      <h3>Fonts</h3>
      <p>
        Seaside Resort
        <br />
        <a href="https://www.fontsquirrel.com/fonts/SeasideResortNF">
          https://www.fontsquirrel.com/fonts/SeasideResortNF
        </a>
        <br />
        <br />
        Densia Sans
        <br />
        <a href="https://www.fontsquirrel.com/fonts/densia-sans">
          https://www.fontsquirrel.com/fonts/densia-sans
        </a>
      </p>
    </>
  );
};

const About = () => {
  return (
    <div>
      <Title text="About this Site" />
      <PageTile content={aboutContent()} />
    </div>
  );
};

export default About;
