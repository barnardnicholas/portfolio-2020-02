import React from "react";
import Title from "../Title";
import PageTile from "../PageTile";
import "../diamond.css";
import tinythumb from "../../assets/images/tinydictionary_600x200.png";
import tiny1 from "../../assets/images/tinydictionary/tiny1.jpg";

const tinyContent = () => {
  return (
    <>
      <a href="https://tinydictionary/netlify.com">
        <img src={tinythumb} alt="Title Screen" className="thumbnailbanner" />
      </a>
      <br />
      <br />
      <h3>Simple Dictionary Web App</h3>
      <br />
      <p>
        Hosted Version:{" "}
        <a
          href="https://tinydictionary/netlify.com"
          style={{ textDecoration: "underline" }}
        >
          https://tinydictionary/netlify.com
        </a>
        <br />
        Frontend:{" "}
        <a
          href="https://github.com/barnardnicholas/tiny-dictionary"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/tiny-dictionary
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

      <p>
        Tiny Dictionary is a super-simple, stripped-down dictionary app I made
        quickly to test making requests to public APIs. Tiny Dictionary uses{" "}
        <a
          href="https://www.wordsapi.com/"
          style={{ textDecoration: "underline" }}
        >
          WordsAPI
        </a>{" "}
        to fetch definitions and ReactJS to display content on the page.
        <br />
        <br />
        Hosted version:{" "}
        <a
          href="https://tinydictionary.netlify.com/"
          style={{ textDecoration: "underline" }}
        >
          https://tinydictionary.netlify.com/
        </a>
        <br />
        Sourcecode (Github):{" "}
        <a
          href="https://github.com/barnardnicholas/tiny-dictionary"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/tiny-dictionary
        </a>
      </p>
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
      <h3>Screenshots:</h3>
      <div className="thumbnailcontainer">
        <img src={tiny1} alt="Screenshot 1" className="thumbnail" />
      </div>
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
      <h3>Instructions:</h3>
      <p>
        Please feel free to clone the project from GitHub to your local machine
        and test the functionality locally. Ensure that git is installed on your
        computer, navigate to the folder where you would like the project folder
        to be placed and type the following command into Terminal:
        <br />{" "}
        <i>git clone https://github.com/barnardnicholas/tiny-dictionary.git</i>
        <br />
        Then navigate into the 'tiny-dictionary' folder and run the commands:
        <br />
        <i>npm install</i>
        <br />
        <i> npm start</i>
        <br />
        The local react server should start and the project should appear in
        your browser. Feel free to browse the code, starting with src/app.js
      </p>
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
    </>
  );
};

const Tinydictionary = () => {
  return (
    <div>
      <a href="https://tinydictionary.netlify.com">
        <Title text="Tiny Dictionary" />
      </a>
      <PageTile content={tinyContent()} />
    </div>
  );
};

export default Tinydictionary;
