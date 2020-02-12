import React from "react";
import Title from "./Title";
import PageTile from "./PageTile";

const homeContent = () => {
  return (
    <>
      <h3>Who Am I?</h3>
      <p>
        Junior Full-Stack Developer, based in Manchester, UK. My background is
        in the Audio Industry, so I'm very interested in audio programming and
        interactive media.
      </p>
      <h3>What is this site?</h3>
      <p>
        This page serves as my Software Development portfolio, so please feel
        free to browse and don't hesitate to get in touch if you like what you
        see.
      </p>
      <h3>Why does it look like a Cocktail Menu?</h3>
      <p>
        I built the site from the wireframe-upwards and experimented with this
        style early-on. I liked the way it looked, so it stayed that way. I hope
        you like it too, and that it makes you want an Old-Fashioned.
      </p>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <Title text="I Bid You Welcome" />
      <PageTile content={homeContent()} />
    </div>
  );
};

export default Home;
