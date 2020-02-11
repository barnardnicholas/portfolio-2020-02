import React, { Component } from "react";
import { Link } from "@reach/router";
import Tile from "./Tile";
import * as data from "../data/data";

class Portfolio extends Component {
  render() {
    return (
      <div className="tilearea">
        {data.tiles.map(tile => {
          return (
            <Link key={tile.slug} to={`${tile.slug}`} className="reactlink">
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
