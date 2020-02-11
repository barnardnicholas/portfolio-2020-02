import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Ambiscape from "./components/portfolio/Ambiscape";
import Tinydictionary from "./components/portfolio/Tinydictionary";
import Ntgtfoi from "./components/portfolio/Ntgtfoi";
import Ncnews from "./components/portfolio/Ncnews";

const App = () => {
  return (
    <div className="App">
      <div className="fixedelements">
        <Header />
        <NavBar />
      </div>
      <div className="viewport">
        <Router primary={false}>
          <Home path="/" />
          <Portfolio path="/portfolio" />
          <About path="/about" />
          <Contact path="/contact" />
          <Ambiscape path="/portfolio/ambiscape" />
          <Tinydictionary path="/portfolio/tinydictionary" />
          <Ntgtfoi path="/portfolio/ntgtfoi" />
          <Ncnews path="/portfolio/ncnews" />
        </Router>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default App;
