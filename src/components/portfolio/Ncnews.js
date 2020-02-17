import React from "react";
import Title from "../Title";
import PageTile from "../PageTile";
import "../diamond.css";
import ncnthumb from "../../assets/images/ncnews_600x200.png";
import ncnews1 from "../../assets/images/ncnews/ncnews1.jpg";
import ncnews2 from "../../assets/images/ncnews/ncnews2.jpg";
import ncnews3 from "../../assets/images/ncnews/ncnews3.jpg";

const ncNewsContent = () => {
  return (
    <>
      <a href="https://ncn/netlify.com">
        <img src={ncnthumb} alt="Title Screen" className="thumbnailbanner" />
      </a>
      <br />
      <br />
      <h3>Full-Stack, Responsive News-Aggregation Website</h3>
      <br />
      <p>
        Hosted Version:{" "}
        <a
          href="https://ncn/netlify.com"
          style={{ textDecoration: "underline" }}
        >
          https://ncn/netlify.com
        </a>
        <br />
        Frontend:{" "}
        <a
          href="https://github.com/barnardnicholas/nb-news-public"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/nb-news-public
        </a>
        <br />
        Backend:{" "}
        <a
          href="https://github.com/barnardnicholas/be-nc-news"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/be-nc-news
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
        Welcome to NC News! I tried to design the site to capture the spirit of
        old IBM terminal interfaces in the early 1980s. Please take a few
        minutes navigate around the site and explore. If you find the look of
        the interface uncomfortable or less-than ideal in some way, simply
        navigate to the Options page, where you will find controls to alter the
        look of the site and disable some of the video effects.
      </p>
      <p>
        <i>
          PLEASE NOTE: NC News is not a real news site, but a demonstration of
          front-end web development, written from scratch over one week. The
          articles, users and comments featured here are placeholders only and
          do not necessarily represent the thoughts or feelings of actual human
          users. For now, NC News is optimised for Google Chrome browser, and
          some features may not work well on other browsers. This is purely due
          to the time constraints of the project, and this may be updated in the
          near future.
        </i>
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
        <img src={ncnews1} alt="Screenshot 1" className="thumbnail" />
        <img src={ncnews2} alt="Screenshot 2" className="thumbnail" />
        <img src={ncnews3} alt="Screenshot 3" className="thumbnail" />
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
        <i>git clone https://github.com/barnardnicholas/nb-news-public.git</i>
        <br />
        Then navigate into the 'nb-news-public' folder and run the commands:
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
      <h3>User Functionality:</h3>
      <p>
        Unfortunately, NC News does not currently support the creating of secure
        user accounts. The user functionality you see here is a demonstration of
        how such a feature might look, were it to implemented. By default you
        will be logged in as the user 'weegembump'. As weegembump, you can post
        comments and likes, and also delete your own comments. A user icon on
        the nav bar will remind you of your current user. If you wish to switch
        user, simply go to the options page and type the name of another user
        into the text box under 'User Settings'. Try 'jessjelly' or 'grumpy19',
        for example.
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
      <h3>Using the Backend:</h3>
      <p>
        The web app you see here was designed to make use of the NC News Backend
        server, which I also wrote from scratch in a week (although not the same
        week!) If you'd like to try the public-facing API for the backend
        yourself, go to{" "}
        <a
          href="https://be-nb-news.herokuapp.com/api"
          style={{ textDecoration: "underline" }}
        >
          https://be-nb-news.herokuapp.com/api
        </a>{" "}
        to see a list of endpoints. You can also check out the github page at{" "}
        <a
          href="https://github.com/barnardnicholas/be-nc-news.git"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/be-nc-news.git
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
    </>
  );
};

const Ncnews = () => {
  return (
    <div>
      <a href="https://ncn.netlify.com">
        <Title text="NC News" />
      </a>
      <PageTile content={ncNewsContent()} />
    </div>
  );
};

export default Ncnews;
