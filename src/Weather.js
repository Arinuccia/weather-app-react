import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  return (
    <div className="Weather">
      <h1> Prague</h1>
      <ul>
        <li>Time</li>
        <li>Day</li>
      </ul>
      <div className="row">
        <div className="col-6">6C</div>
        <div className="col-6">
          <ul>
            <li>Wind</li>
            <li>Humidity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
