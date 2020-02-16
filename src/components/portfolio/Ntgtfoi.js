import React from "react";
import Title from "../Title";
import PageTile from "../PageTile";
import ntgtfoi from "../../assets/images/ntgtfoi_600x200.png";
import pic1 from "../../assets/images/ntgtfoi/4.jpg";
import pic2 from "../../assets/images/ntgtfoi/5.jpg";
import pic3 from "../../assets/images/ntgtfoi/6.jpg";
import titlescreen from "../../assets/images/ntgtfoi/titlescreen.jpg";

const ntgtfoiContent = () => {
  return (
    <>
      <a href="https://gamejolt.com/games/ntgtfoi-the-game/67958">
        <img
          src={titlescreen}
          alt="Title Screen"
          height="125"
          width="200"
          className="thumbnail"
        />
      </a>
      <br />
      <br />
      <h3>A Point-And-Drink Adventure Game</h3>
      <a href="https://gamejolt.com/games/ntgtfoi-the-game/67958">
        https://gamejolt.com/games/ntgtfoi-the-game/67958
      </a>
      <p>
        <i>"NTGTFOI (Need-To-Get-The-F***-On-It)"</i> is a Point-and-Drink
        Adventure Game designed and programmed by Nick Barnard to commemorate
        the 30th birthday of his buddy Matt Hartley.
        <br />
        <br />
        Created in the style of classic 90's 'Point-And-Click' adventure games
        such as <i>The Secret of Monkey Island</i> and{" "}
        <i>Indiana Jones and the Fate of Atlantis</i>, <i>NTGTFOI</i> is not,
        strictly speaking, a game. It's more of an interactive birthday card
        which will make little-to-no sense if you don't know Matt Hartley, or if
        you've never been to Altrincham, the town where he lives. Despite this,
        there may still be some laughs to be had for those who simply like a
        drink and a 90's Adventure Game, or - even better - both at the same
        time.
        <br />
        <br />
        <div className="thumbnailcontainer">
          <img
            src={pic1}
            alt="Screenshot 1"
            height="125"
            width="200"
            className="thumbnail"
          />
          <img
            src={pic2}
            alt="Screenshot 2"
            height="125"
            width="200"
            className="thumbnail"
          />
          <img
            src={pic3}
            alt="Screenshot 3"
            height="125"
            width="200"
            className="thumbnail"
          />
        </div>
        <br />
        <br />
        As the brave protagonist Matt Hartley, you must embrace your advancing
        years by going out for a night on the town. Explore bars, buy drinks,
        get drunk. Oh and Happy Birthday.
      </p>
      <h3>Gameplay:</h3>
      <div className="thumbnailcontainer">
        <iframe
          width="200"
          height="125"
          src="https://www.youtube.com/embed/hqbVsGNJftU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="thumbnail"
        ></iframe>
      </div>
      <br />
      <h3>Making Of:</h3>
      <div className="thumbnailcontainer">
        <iframe
          width="200"
          height="125"
          src="https://www.youtube.com/embed/jALHvvwn3Dg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="thumbnail"
        ></iframe>
        <iframe
          width="200"
          height="125"
          src="https://www.youtube.com/embed/bcrZ9HT9Wfw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="thumbnail"
        ></iframe>
      </div>

      <h3>Instructions:</h3>
      <p>
        Ensure that all files are kept in the same folder on a local hard drive.
        <br />
        No installation is necessary.
        <br />
        Run the game by launching 'NTGTFOI.exe'
        <br />
        Configure the game by launching 'WinSetup.exe'
        <br />
        All Saved games are deposited in C:\Users[username]\Saved Games\NTGTFOI\
        on Windows
      </p>
      <h3>About:</h3>
      <p>
        Version at time of upload - 1.0
        <br />
        Released - 16th May 2015
        <br />
        Written & Programmed by Nick Barnard
        <br />
        (c) Copyright Control TibSoft 2015
        <br />
        Sounds created using BFXR http://www.bfxr.net/
        <br />
        Additional music by Bjorn Lynne http://www.lynnemusic.com/
        <br />
        Created using Adventure Game Studio
        http://www.adventuregamestudio.co.uk/
      </p>
    </>
  );
};

const Ntgtfoi = () => {
  return (
    <div>
      <a href="https://gamejolt.com/games/ntgtfoi-the-game/67958">
        <Title text="NTGTFOI" />
      </a>
      <PageTile content={ntgtfoiContent()} />
    </div>
  );
};

export default Ntgtfoi;
