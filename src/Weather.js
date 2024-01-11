import React from "react";

import "./App.css";
export default function Weather() {
  return (
    <div className="Weather">
      <br />
      <div className="line-1">
        City <span className="line-1">Time</span>
      </div>

      <div className="row description1">
        <div className="col-12">
          <li className="temperature">6C</li>
        </div>
        <div className="col-12">
          <li className="weather-d">Sunny</li>
        </div>
        <div className="col-12">
          <li className="uv-index">UV-index:</li>
        </div>
      </div>
      <div className="row description2">
        <div className="col-4">
          <li>Wind</li>
        </div>
        <div className="col-4">
          <li>Humidity</li>
        </div>
        <div className="col-4">
          <li>Persipitation</li>
        </div>
      </div>
    </div>
  );
}
