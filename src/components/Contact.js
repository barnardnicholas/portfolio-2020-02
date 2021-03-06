import React from "react";
import Title from "./Title";
import PageTile from "./PageTile";
import "./diamond.css";
import reactjs from "../assets/images/reactjs_600x200.png";
import reachrouter from "../assets/images/reachrouter_600x200.png";

const contactContent = () => {
  return (
    <>
      <h3>Tech Stack</h3>
      <br />
      {/* <div className="thumbnailcontainer">
        <img src={reactjs} alt="React.js" width="180px" height="60px" />
        <img src={reachrouter} alt="Reach/Router" width="180px" height="60px" />
      </div> */}
      {/* <br />
      <br /> */}
      <p>Lorem ipsum</p>
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
    </>
  );
};

const Contact = () => {
  return (
    <div>
      <Title text="Get in touch" />
      <PageTile content={contactContent()} />
    </div>
  );
};

export default Contact;
