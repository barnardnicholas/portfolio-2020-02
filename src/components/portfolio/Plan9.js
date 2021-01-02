import React from "react";
import Title from "../Title";
import PageTile from "../PageTile";
import "../diamond.css";
import ntgtfoi from "../../assets/images/ntgtfoi_600x200.png";
import pic1 from "../../assets/images/ntgtfoi/4.jpg";
import pic2 from "../../assets/images/ntgtfoi/5.jpg";
import pic3 from "../../assets/images/ntgtfoi/6.jpg";
import plan9Banner from "../../assets/images/plan9_600x200.png";
import plan91 from "../../assets/images/plan9/plan9-1.png";
import plan92 from "../../assets/images/plan9/plan9-2.png";
import plan93 from "../../assets/images/plan9/plan9-3.png";

const plan9Content = () => {
  return (
    <>
      <a href="https://plan9.nickbarnard.co.uk">
        <img
          src={plan9Banner}
          alt="Title Screen"
          height="200"
          width="600"
          className="thumbnailbanner"
        />
      </a>
      <br />
      <br />
      <h3>A Slow Movie-Screening Bot</h3>
      <br />
      <a
        href="https://twitter.com/Plan9FBF"
        target="_blank"
        style={{ textDecoration: "underline" }}
      >
        https://twitter.com/Plan9FBF
      </a>
      <br />
      <p>
        <i>Plan 9 Frame-By-Frame</i> is a a lockdown Twitter bot project
        programmed during the first Covid-19 Lockdown of 2020.
        <br />
        <br />
        Plan 9 Frame-by-Frame began as an experiment to see if it would be
        possible to screen a movie one frame at a time on Twitter, possibly
        breaking a record for the slowest movie screening in history. You can
        see the most recent tweets further down this page, or view the live
        screening{" "}
        <a
          href="https://twitter.com/Plan9FBF"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>
        <br />
        <br />
        Ed Wood's black-and-white B-Movie Plan 9 From Outer Space has found a
        substantial cult following in the decades since its release on 22nd July
        1959, and is widely regarded to be endearingly bad. It is also,
        crucially for this project, in the Public Domain, meaning that nobody is
        considered to own the intellectual property rights to the movie. This
        makes it an ideal movie for this project.
        <br />
        <br />
        Plan 9 Frame-By-Frame was built using Node.js, React JS, Google
        Firebase, Cron-job.org and, of course, Twitter. You can view the source
        code for the app on GitHub at the following links:
        <br />
        <br />
        <a
          href="https://github.com/barnardnicholas/plan9-frontend"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/plan9-frontend
        </a>
        <br />
        <a
          href="https://github.com/barnardnicholas/plan9-bot"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          https://github.com/barnardnicholas/plan9-bot
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
        <img src={plan91} alt="Screenshot 1" className="thumbnail" />
        <img src={plan92} alt="Screenshot 2" className="thumbnail" />
        <img src={plan93} alt="Screenshot 3" className="thumbnail" />
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
      <h3>Tweets:</h3>
      <div className="thumbnailcontainer">
        <a
          className="twitter-timeline"
          data-width="100%"
          data-height="100%"
          data-dnt="true"
          data-theme="dark"
          href="https://twitter.com/Plan9FBF?ref_src=twsrc%5Etfw"
        >
          Tweets by Plan9FBF
        </a>
      </div>
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
      <h3>About:</h3>
      <p>
        Screening Started - 22nd July 2020
        <br />
        Written & Programmed by Nick Barnard
        <br />
        Created using NodeJS, expressJS, TwitJS, ReactJS and CronJob.org
      </p>
    </>
  );
};

const Plan9 = () => {
  return (
    <div>
      <a href="https://twitter.com/Plan9FBF" target="_blank">
        <Title text="Plan 9 Frame-By-Frame" />
      </a>
      <PageTile content={plan9Content()} />
    </div>
  );
};

export default Plan9;
