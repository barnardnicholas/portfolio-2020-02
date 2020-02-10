import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { Router } from "@reach/router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <div className="fixedelements">
        <Header />
        <NavBar />
      </div>
      {/* <div className="headerspacer"></div> */}
      <div className="viewport">
        <Router primary={false}>
          <Home path="/" />
          <Portfolio path="/portfolio" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>
      </div>
    </div>
  );
}

export default App;
