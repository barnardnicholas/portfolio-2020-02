import React from "react";
import Title from "./Title";
import PageTile from "./PageTile";

const aboutContent = () => {
  return (
    <>
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
        <br />
        <br />
      </p>
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
