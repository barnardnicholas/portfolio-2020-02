import React from "react";
import Title from "../Title";
import PageTile from "../PageTile";

const ntgtfoiContent = () => {
  return (
    <>
      <h3>A Point-And-Drink Adventure Game</h3>
      <p></p>
    </>
  );
};

const Ntgtfoi = () => {
  return (
    <div>
      <Title text="NTGTFOI" />
      <PageTile content={ntgtfoiContent()} />
    </div>
  );
};

export default Ntgtfoi;
