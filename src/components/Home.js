import React from "react";
import Title from "./Title";
import PageTile from "./PageTile";

const homeContent = () => {
  return (
    <>
      <h3>About Me</h3>
      <p>
        Junior Full-Stack Developer, based in Manchester, UK. This page serves
        as my development portfolio, so please feel free to browse and don't
        hesitate to get in touch if you like what you see.
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
