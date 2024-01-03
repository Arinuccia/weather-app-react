import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  return (
    <div className="Weather">
      <h1> Weather app</h1>
      <ul>
        <li>City</li>
        <li>Time</li>
      </ul>
      <div className="row">
        <div className="col-12">
          <ul>
            <li>6C</li>
            <li>Affirmation</li>
          </ul>
        </div>

        <div className="col-12">
          <ul>
            <li>Wind</li>
            <li>Humidity</li>
          </ul>
        </div>
      </div>
      <div>
        <button>Get an affirmation</button>
      </div>
      <div>
        <button>Get a playlist for my weather</button>
      </div>
      <div className="row">
        <div className="col-2">
          <ul>
            <li>Mon</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>

        <div className="col-2">
          <ul>
            <li>Tue</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>

        <div className="col-2">
          <ul>
            <li>Wed</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>

        <div className="col-2">
          <ul>
            <li>Thu</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>Fri</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
