import React from "react";
import "./tile.css";

const PageTile = ({ title, content }) => {
  return (
    <div className="tile" style={{ minWidth: "276px", maxWidth: "700px" }}>
      <div className="corners-deco-container container">
        <div className="content">
          <h3>{title}</h3>
          <p>{content}</p>
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

export default PageTile;
