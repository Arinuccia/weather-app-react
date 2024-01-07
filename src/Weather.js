import React, { useState } from "react";
import axios from "axios";
import "./App.css";
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
            <li className="temperature">6C</li>
            <li>Affirmation</li>
          </ul>
        </div>

        <div className="col-12">
          <ul className="description">
            <li>Wind</li>
            <li>Humidity</li>
          </ul>
        </div>
      </div>
      <div className="button1">
        <button>Get an affirmation</button>
      </div>
      <div className="button1">
        <button>Get a playlist for my weather</button>
      </div>
      <div className="row ">
        <div className="col-2 forecast">
          <ul>
            <li>Mon</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>

        <div className="col-2 forecast">
          <ul>
            <li>Tue</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>

        <div className="col-2 forecast">
          <ul>
            <li>Wed</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>

        <div className="col-2 forecast">
          <ul>
            <li>Thu</li>
            <li>Temp</li>
            <li>img</li>
            <li>Description</li>
          </ul>
        </div>
        <div className="col-2 forecast">
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
