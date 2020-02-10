import React, { Component } from "react";
import * as data from "../data/data";
import { Router, Link } from "@reach/router";
import Tile from "./Tile";

class Portfolio extends Component {
  render() {
    return (
      <div className="tilearea">
        {data.tiles.map(tile => {
          return (
            <Link to={`${tile.slug}`} className="reactlink">
              <Tile
                path={`/${tile.slug}`}
                name={tile.name}
                slug={tile.slug}
                description={tile.description}
                tags={tile.tags}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Portfolio;
