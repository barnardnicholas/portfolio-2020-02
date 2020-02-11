import React from "react";
import Title from "./Title";
import PageTile from "./PageTile";

const homeTitle = "About Me";
const homeContent =
  "Junior Full-Stack Developer, based in Manchester, UK. This page serves as my development portfolio, so please feel free to browse and don't hesitate to get in touch if you like what you see.";

const Home = () => {
  return (
    <div>
      <Title text="I Bid You Welcome" />
      <PageTile title={homeTitle} content={homeContent} />
    </div>
  );
};

export default Home;
