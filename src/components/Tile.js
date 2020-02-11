import React from "react";

const Tile = ({ name, slug, description, tags }) => {
  return (
    <div className="tile" id={slug}>
      <div class="corners-deco-container container">
        <div class="content">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div class="square-left-top"></div>
        <div class="square-left-bottom"></div>
        <div class="square-right-top"></div>
        <div class="square-right-bottom"></div>
        <div class="vertical-edge-left"></div>
        <div class="vertical-edge-right"></div>
        <div class="horizontal-edge-left"></div>
        <div class="horizontal-edge-right"></div>
        <div class="left-outer"></div>
        <div class="right-outer"></div>
        <div class="top-outer"></div>
        <div class="bottom-outer"></div>
        <div class="left-inner"></div>
        <div class="right-inner"></div>
        <div class="top-inner"></div>
        <div class="bottom-inner"></div>
      </div>
    </div>
  );
};

export default Tile;
