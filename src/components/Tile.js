import React from "react";
import "./tile.css";
import placeholder from "../assets/images/placeholder-pic-300x100.png";
import images from "../assets/images/images-index";

const Tile = ({ name, slug, description, tags, thumbnail }) => {
  return (
    <div className="tile" id={slug}>
      <div className="corners-deco-container container">
        <div className="content">
          <img
            src={images[slug]}
            alt={name}
            width="228"
            height="76"
            className="thumbnailbanner"
          />
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="square-left-top"></div>
        <div className="square-left-bottom"></div>
        <div className="square-right-top"></div>
        <div className="square-right-bottom"></div>
        <div className="vertical-edge-left"></div>
        <div className="vertical-edge-right"></div>
        <div className="horizontal-edge-left"></div>
        <div className="horizontal-edge-right"></div>
        <div className="left-outer"></div>
        <div className="right-outer"></div>
        <div className="top-outer"></div>
        <div className="bottom-outer"></div>
        <div className="left-inner"></div>
        <div className="right-inner"></div>
        <div className="top-inner"></div>
        <div className="bottom-inner"></div>
      </div>
    </div>
  );
};

export default Tile;
