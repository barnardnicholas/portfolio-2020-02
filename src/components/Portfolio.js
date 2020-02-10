import React, { Component } from "react";
import * as data from "../data/data";

class Portfolio extends Component {
  componentDidMount() {
    console.log("didmount");
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="tilearea">
        {data.tiles.map(tile => {
          return (
            <div className="tile" id={tile.slug}>
              <h3>{tile.name}</h3>
              <p>{tile.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Portfolio;
