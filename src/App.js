import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Road Trip Weather Checker </h1>
        <div className="row">
          <div className="col-sm-3">
            <Weather defaultCity="Calgary" />
          </div>
          <div className="col-sm-3">
            <Weather defaultCity="Banff" />
          </div>
          <div className="col-sm-3">
            <Weather defaultCity="Lake Louise" />
          </div>
          <div className="col-sm-3">
            <Weather defaultCity="Invermere" />
          </div>
        </div>
        <footer>
          This project was coded by Lindsay Golding and is{" "}
          <a
            href="https://github.com/ljgolding/react-weather-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
