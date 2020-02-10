import React from "react";

const Tile = ({ name, slug, description, tags }) => {
  return (
    <div className="tile" id={slug}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Tile;
